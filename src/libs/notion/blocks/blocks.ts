import { randomUUID } from "crypto";

import { isFullBlock } from "@notionhq/client";

import {
  callAPIWithBackOff,
  fetchSiteMeta,
  fetchOembed,
  notNullNorUndefined,
} from "../../utils.js";
import { notion } from "../auth.js";
import { listComments } from "../comments.js";
import { fetchDatabase } from "../databases.js";
import { fetchPage } from "../pages.js";

import { convertAudioResponseToBlock } from "./audio.js";
import { convertBookmarkResponseToBlock } from "./bookmark.js";
import { convertBreadcrumbResponseToBlock } from "./breadcrumb.js";
import { convertBulletedListItemResponseToBlock } from "./bulletedListItem.js";
import { convertCalloutResponseToBlock } from "./callout.js";
import { convertChildDatabaseResponseToBlock } from "./childDatabase.js";
import { convertChildPageResponseToBlock } from "./childPage.js";

import type {
  BlockObjectResponse,
  GetBlockParameters,
  GetBlockResponse,
  ListBlockChildrenParameters,
  ListBlockChildrenResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";
import type { BulletedListBlockObject } from "src/components/Blocks/BulletedList.js";
import type { CodeBlockObject } from "src/components/Blocks/Code.js";
import type {
  ColumnListBlockObject,
  ColumnBlockObject,
} from "src/components/Blocks/ColumnList.js";
import type { DividerBlockObject } from "src/components/Blocks/Divider.js";
import type { EmbedBlockObject } from "src/components/Blocks/Embed.js";
import type { EquationBlockObject } from "src/components/Blocks/Equation.js";
import type { FileBlockObject } from "src/components/Blocks/File.js";
import type { Heading1BlockObject } from "src/components/Blocks/Heading1.js";
import type { Heading2BlockObject } from "src/components/Blocks/Heading2.js";
import type { Heading3BlockObject } from "src/components/Blocks/Heading3.js";
import type { ImageBlockObject } from "src/components/Blocks/Image.js";
import type { LinkPreviewBlockObject } from "src/components/Blocks/LinkPreview.js";
import type { LinkToPageBlockObject } from "src/components/Blocks/LinkToPage.js";
import type { NumberedListBlockObject } from "src/components/Blocks/NumberedList.js";
import type { NumberedListItemBlockObject } from "src/components/Blocks/NumberedListItem.js";
import type { ParagraphBlockObject } from "src/components/Blocks/Paragraph.js";
import type { PdfBlockObject } from "src/components/Blocks/Pdf.js";
import type { QuoteBlockObject } from "src/components/Blocks/Quote.js";
import type { SyncedBlockBlockObject } from "src/components/Blocks/SyncedBlock.js";
import type {
  TableRowBlockObject,
  TableBlockObject,
} from "src/components/Blocks/Table.js";
import type { TableOfContentsBlockObject } from "src/components/Blocks/TableOfContents.js";
import type { TemplateBlockObject } from "src/components/Blocks/Template.js";
import type { ToDoBlockObject } from "src/components/Blocks/ToDo.js";
import type { ToggleBlockObject } from "src/components/Blocks/Toggle.js";
import type { UnsupportedBlockObject } from "src/components/Blocks/Unsupported.js";
import type { VideoBlockObject } from "src/components/Blocks/Video.js";
import type { BlockObject } from "src/components/index.js";
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
    const blockComponent = convertResponseToBlock(block);
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
    blocks.map(async (child_block) => await convertResponseToBlock(child_block))
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

export const convertResponseToBlock = async (
  block: BlockObjectResponse | PartialBlockObjectResponse
): Promise<BlockObject | null> => {
  if (!isFullBlock(block)) {
    return null;
  }
  switch (block.type) {
    case "audio": {
      return await convertAudioResponseToBlock(block);
    }
    case "bookmark": {
      return await convertBookmarkResponseToBlock(block);
    }
    case "breadcrumb": {
      return await convertBreadcrumbResponseToBlock(block);
    }
    case "bulleted_list_item": {
      return await convertBulletedListItemResponseToBlock(block);
    }
    case "callout": {
      return await convertCalloutResponseToBlock(block);
    }
    case "child_database": {
      return await convertChildDatabaseResponseToBlock(block);
    }
    case "child_page": {
      return await convertChildPageResponseToBlock(block);
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
      const { payload: oembed, error } = await fetchOembed(block.embed.url);
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
      const { payload: site_meta, error } = await fetchSiteMeta(
        block.link_preview.url
      );
      if (!error) {
        if (site_meta) {
          return {
            ...block,
            link_preview: {
              ...block.link_preview,
              site_meta: site_meta,
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
        const { payload: oembed, error } = await fetchOembed(
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
