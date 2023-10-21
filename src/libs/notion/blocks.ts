import { randomUUID } from "crypto";

import { isFullBlock } from "@notionhq/client";

import {
  callAPIWithBackOff,
  fetchArticleData,
  fetchOembedData,
  notNullNorUndefined,
} from "../utils.js";

import { notion } from "./auth.js";
import { listComments } from "./comments.js";
import { fetchDatabase } from "./databases.js";
import { fetchPage } from "./pages.js";
import { fetchAllParents } from "./parent.js";

import type {
  AudioBlockObject,
  BlockObject,
  BookmarkBlockObject,
  BulletedListBlockObject,
  BulletedListItemBlockObject,
  CalloutBlockObject,
  ChildDatabaseBlockObject,
  ChildPageBlockObject,
  CodeBlockObject,
  ColumnBlockObject,
  ColumnListBlockObject,
  DividerBlockObject,
  EmbedBlockObject,
  EquationBlockObject,
  FileBlockObject,
  Heading1BlockObject,
  Heading2BlockObject,
  Heading3BlockObject,
  ImageBlockObject,
  LinkPreviewBlockObject,
  LinkToPageBlockObject,
  NumberedListBlockObject,
  NumberedListItemBlockObject,
  ParagraphBlockObject,
  PdfBlockObject,
  QuoteBlockObject,
  SyncedBlockBlockObject,
  TableBlockObject,
  TableOfContentsBlockObject,
  TableRowBlockObject,
  TemplateBlockObject,
  ToDoBlockObject,
  ToggleBlockObject,
  UnsupportedBlockObject,
  VideoBlockObject,
} from "../../types/components.js";
import type {
  BlockObjectResponse,
  DatabaseObjectResponse,
  GetBlockParameters,
  GetBlockResponse,
  ListBlockChildrenParameters,
  ListBlockChildrenResponse,
  PageObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";
import type { ListBlockChildrenResponseResults } from "src/types/notion.js";

export const retrieveBlock = async (
  args: GetBlockParameters
): Promise<GetBlockResponse | undefined> => {
  const { payload, error } = await callAPIWithBackOff<
    GetBlockParameters,
    GetBlockResponse
  >(notion.blocks.retrieve, args);

  if (!error) {
    return payload;
  }
  return;
};

export const listBlockChildren = async (
  args: ListBlockChildrenParameters
): Promise<ListBlockChildrenResponseResults> => {
  const { payload, error } = await callAPIWithBackOff<
    ListBlockChildrenParameters,
    ListBlockChildrenResponse
  >(notion.blocks.children.list, args);

  if (!error) {
    if (payload.next_cursor) {
      const nextResults = await listBlockChildren({
        ...args,
        start_cursor: payload.next_cursor,
      });
      payload.results = [...payload.results, ...nextResults];
    }

    return payload.results;
  }
  return [];
};

export const fetchBlockComponent = async (
  blockId: string
): Promise<BlockObject | null> => {
  const block = await retrieveBlock({ block_id: blockId });
  if (block) {
    const blockComponent = convertBlockToComponent(block);
    return blockComponent;
  }
  return null;
};

export const fetchBlockComponents = async (
  blockId: string
): Promise<BlockObject[]> => {
  const childrenBlockResponses = await listBlockChildren({
    block_id: blockId,
  });
  const childrenBlockComponents = await resolveBlockChildren(
    childrenBlockResponses
  );
  return childrenBlockComponents;
};

export const resolveBlockChildren = async (
  blocks: ListBlockChildrenResponseResults
): Promise<Array<BlockObject>> => {
  const blockObjectComponents = await Promise.all(
    blocks.map(
      async (child_block) => await convertBlockToComponent(child_block)
    )
  );
  const nonNullBlockObjectComponents =
    blockObjectComponents.filter(notNullNorUndefined);
  return wrapListItems(nonNullBlockObjectComponents);
};

export const wrapListItems = (
  blocks: Array<BlockObject>
): Array<BlockObject> => {
  return blocks.reduce(
    (
      prevList: Array<BlockObject>,
      currBlock: BlockObject
    ): Array<BlockObject> => {
      /* If the block.type is neither
       * 'bulleted_list_item' nor 'numbered_list_item' nor 'bulleted_list' nor 'numbered_list',
       * return the block as it is.
       */
      if (
        currBlock.type !== "bulleted_list" &&
        currBlock.type !== "numbered_list" &&
        currBlock.type !== "bulleted_list_item" &&
        currBlock.type !== "numbered_list_item"
      ) {
        return [...prevList, currBlock];
      }
      const prevBlock = prevList[prevList.length - 1];

      // For the first time,
      // create a list object and add list_item to the list.
      const id = randomUUID();
      if (
        // bulleted_list_item
        currBlock.type === "bulleted_list_item" &&
        prevBlock?.type !== "bulleted_list"
      ) {
        const bulletedList = {
          id,
          type: "bulleted_list",
          bulleted_list: { items: [currBlock] },
        } satisfies BulletedListBlockObject;
        return [...prevList, bulletedList];
      }
      if (
        // numbered_list_item
        currBlock.type === "numbered_list_item" &&
        prevBlock?.type !== "numbered_list"
      ) {
        const numberedList = {
          id,
          type: "numbered_list",
          numbered_list: { items: [currBlock] },
        } satisfies NumberedListBlockObject;
        return [...prevList, numberedList];
      }

      // Intermediate,
      // add the second and subsequent list items to the previous list.
      if (
        // bulleted_list
        currBlock.type === "bulleted_list_item" &&
        prevBlock?.type === "bulleted_list"
      ) {
        prevBlock.bulleted_list.items = [
          ...prevBlock.bulleted_list.items,
          currBlock,
        ];
      }
      if (
        // numbered_list_item
        currBlock.type === "numbered_list_item" &&
        prevBlock?.type === "numbered_list"
      ) {
        prevBlock.numbered_list.items = [
          ...prevBlock.numbered_list.items,
          currBlock,
        ];
      }

      // If the condition is not met, do not display/render.
      return prevList;
    },
    []
  );
};
export const convertBlockToComponent = async (
  block: BlockObjectResponse | PartialBlockObjectResponse
): Promise<BlockObject | null> => {
  if (!isFullBlock(block)) {
    return null;
  }
  switch (block.type) {
    case "audio": {
      return { ...block } satisfies AudioBlockObject;
    }
    case "bookmark": {
      const { payload: article_data, error } = await fetchArticleData(
        block.bookmark.url
      );
      if (!error) {
        if (article_data) {
          return {
            ...block,
            bookmark: {
              ...block.bookmark,
              article_data: article_data,
            },
          } satisfies BookmarkBlockObject;
        }
      }
      return {
        ...block,
        bookmark: {
          ...block.bookmark,
        },
      } satisfies BookmarkBlockObject;
    }
    case "breadcrumb": {
      const allParents = await fetchAllParents(block.parent);
      const parents = allParents.filter(
        (parent): parent is PageObjectResponse | DatabaseObjectResponse =>
          parent.object === "page" || parent.object === "database"
      );

      return {
        ...block,
        breadcrumb: {
          ...block.breadcrumb,
          parents,
        },
      };
    }
    case "bulleted_list_item": {
      if (block.has_children) {
        const children = await fetchBlockComponents(block.id);
        return {
          ...block,
          bulleted_list_item: {
            ...block.bulleted_list_item,
            children,
          },
        } satisfies BulletedListItemBlockObject;
      }
      return {
        ...block,
      } satisfies BulletedListItemBlockObject;
    }
    case "callout": {
      if (block.has_children) {
        const children = await fetchBlockComponents(block.id);
        return {
          ...block,
          callout: {
            ...block.callout,
            children,
          },
        } satisfies CalloutBlockObject;
      }
      return {
        ...block,
      } satisfies CalloutBlockObject;
    }
    case "child_database": {
      const childDatabase = await fetchDatabase(block.id);
      if (childDatabase) {
        return {
          ...block,
          child_database: {
            ...block.child_database,
            database: childDatabase ?? null,
          },
        } satisfies ChildDatabaseBlockObject;
      }
      return {
        ...block,
        child_database: {
          ...block.child_database,
        },
      } satisfies ChildDatabaseBlockObject;
    }
    case "child_page": {
      const childPage = await fetchPage(block.id);
      if (childPage) {
        return {
          ...block,
          child_page: {
            ...block.child_page,
            page: childPage,
          },
        } satisfies ChildPageBlockObject;
      }
      return {
        ...block,
        child_page: {
          ...block.child_page,
        },
      } satisfies ChildPageBlockObject;
    }
    case "code": {
      return { ...block } satisfies CodeBlockObject;
    }
    case "column": {
      if (block.has_children) {
        const children = await fetchBlockComponents(block.id);
        return {
          ...block,
          column: {
            ...block.column,
            children,
          },
        };
      }
      return { ...block } satisfies ColumnBlockObject;
    }
    case "column_list": {
      if (block.has_children) {
        const blocks = await fetchBlockComponents(block.id);
        const columns = blocks.filter(
          (block): block is ColumnBlockObject => block.type === "column"
        );
        return {
          ...block,
          column_list: {
            ...block.column_list,
            columns,
          },
        } satisfies ColumnListBlockObject;
      }
      return {
        ...block,
      } satisfies ColumnListBlockObject;
    }
    case "divider": {
      return { ...block } satisfies DividerBlockObject;
    }
    case "embed": {
      const { payload: oembed, error } = await fetchOembedData(block.embed.url);
      if (!error) {
        return {
          ...block,
          embed: {
            ...block.embed,
            oembed,
          },
        } satisfies EmbedBlockObject;
      }
      return { ...block } satisfies EmbedBlockObject;
    }
    case "equation": {
      return { ...block } satisfies EquationBlockObject;
    }
    case "file": {
      return { ...block } satisfies FileBlockObject;
    }
    case "heading_1": {
      if (block.has_children) {
        const children = await fetchBlockComponents(block.id);
        return {
          ...block,
          heading_1: {
            ...block.heading_1,
            children,
          },
        } satisfies Heading1BlockObject;
      }
      return {
        ...block,
      } satisfies Heading1BlockObject;
    }
    case "heading_2": {
      if (block.has_children) {
        const children = await fetchBlockComponents(block.id);
        return {
          ...block,
          heading_2: {
            ...block.heading_2,
            children,
          },
        } satisfies Heading2BlockObject;
      }
      return {
        ...block,
      } satisfies Heading2BlockObject;
    }
    case "heading_3": {
      if (block.has_children) {
        const children = await fetchBlockComponents(block.id);
        return {
          ...block,
          heading_3: {
            ...block.heading_3,
            children,
          },
        } satisfies Heading3BlockObject;
      }
      return {
        ...block,
      } satisfies Heading3BlockObject;
    }
    case "image": {
      return { ...block } satisfies ImageBlockObject;
    }
    case "link_preview": {
      const { payload: article_data, error } = await fetchArticleData(
        block.link_preview.url
      );
      if (!error) {
        if (article_data) {
          return {
            ...block,
            link_preview: {
              ...block.link_preview,
              article_data: article_data,
            },
          } satisfies LinkPreviewBlockObject;
        }
      }
      return {
        ...block,
        link_preview: {
          ...block.link_preview,
        },
      } satisfies LinkPreviewBlockObject;
    }
    case "link_to_page": {
      switch (block.link_to_page.type) {
        case "database_id": {
          const linkedDatabase = await fetchDatabase(
            block.link_to_page.database_id
          );
          return {
            ...block,
            link_to_page: {
              ...block.link_to_page,
              database: linkedDatabase,
            },
          } satisfies LinkToPageBlockObject;
        }
        case "page_id": {
          const linkedPage = await fetchPage(block.link_to_page.page_id);
          return {
            ...block,
            link_to_page: {
              ...block.link_to_page,
              page: linkedPage,
            },
          } satisfies LinkToPageBlockObject;
        }
        case "comment_id": {
          const linkedComments = await listComments({
            block_id: block.link_to_page.comment_id,
          });
          return {
            ...block,
            link_to_page: {
              ...block.link_to_page,
              comments: linkedComments,
            },
          } satisfies LinkToPageBlockObject;
        }
        default: {
          return null;
        }
      }
    }
    case "numbered_list_item": {
      if (block.has_children) {
        const children = await fetchBlockComponents(block.id);
        return {
          ...block,
          numbered_list_item: {
            ...block.numbered_list_item,
            children,
          },
        } satisfies NumberedListItemBlockObject;
      }
      return {
        ...block,
      } satisfies NumberedListItemBlockObject;
    }
    case "paragraph": {
      if (block.has_children) {
        const children = await fetchBlockComponents(block.id);
        return {
          ...block,
          paragraph: {
            ...block.paragraph,
            children,
          },
        } satisfies ParagraphBlockObject;
      }
      return {
        ...block,
      } satisfies ParagraphBlockObject;
    }
    case "pdf": {
      return { ...block } satisfies PdfBlockObject;
    }
    case "quote": {
      if (block.has_children) {
        const children = await fetchBlockComponents(block.id);
        return {
          ...block,
          quote: {
            ...block.quote,
            children,
          },
        } satisfies QuoteBlockObject;
      }
      return {
        ...block,
      } satisfies QuoteBlockObject;
    }
    case "synced_block": {
      if (block.has_children) {
        const children = await fetchBlockComponents(block.id);
        if (block.synced_block.synced_from) {
          const duplicatedBlock = await fetchBlockComponent(
            block.synced_block.synced_from.block_id
          );
          return {
            ...block,
            synced_block: {
              ...block.synced_block,
              synced_from: {
                ...block.synced_block.synced_from,
                block: duplicatedBlock,
              },
              children: children.length === 0 ? null : children,
            },
          } satisfies SyncedBlockBlockObject;
        }
        return {
          ...block,
          synced_block: {
            ...block.synced_block,
            children,
          },
        } satisfies SyncedBlockBlockObject;
      }
      return { ...block } satisfies SyncedBlockBlockObject;
    }
    case "table": {
      if (block.has_children) {
        const blocks = await fetchBlockComponents(block.id);
        const table_rows = blocks.filter(
          (block): block is TableRowBlockObject => block.type === "table_row"
        );
        return {
          ...block,
          table: {
            ...block.table,
            table_rows,
          },
        } satisfies TableBlockObject;
      }
      return {
        ...block,
      } satisfies TableBlockObject;
    }
    case "table_of_contents": {
      return { ...block } satisfies TableOfContentsBlockObject;
    }
    case "table_row": {
      return { ...block } satisfies TableRowBlockObject;
    }
    case "template": {
      return { ...block } satisfies TemplateBlockObject;
    }
    case "to_do": {
      if (block.has_children) {
        const children = await fetchBlockComponents(block.id);
        return {
          ...block,
          to_do: {
            ...block.to_do,
            children,
          },
        } satisfies ToDoBlockObject;
      }
      return {
        ...block,
      } satisfies ToDoBlockObject;
    }
    case "toggle": {
      if (block.has_children) {
        const children = await fetchBlockComponents(block.id);
        return {
          ...block,
          toggle: {
            ...block.toggle,
            children,
          },
        } satisfies ToggleBlockObject;
      }
      return {
        ...block,
      } satisfies ToggleBlockObject;
    }
    case "unsupported": {
      return { ...block } satisfies UnsupportedBlockObject;
    }
    case "video": {
      if (block.video.type === "external") {
        const { payload: oembed, error } = await fetchOembedData(
          block.video.external.url,
          { maxwidth: 560, maxheight: 315 }
        );
        if (!error) {
          return {
            ...block,
            video: {
              ...block.video,
              oembed,
            },
          } satisfies VideoBlockObject;
        }
      }
      return { ...block } satisfies VideoBlockObject;
    }
    default: {
      return null;
    }
  }
};
