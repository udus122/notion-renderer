import { randomUUID } from "crypto";

import {
  Client,
  isNotionClientError,
  APIErrorCode,
  ClientErrorCode,
  isFullBlock,
  isFullDatabase,
  isFullPage,
} from "@notionhq/client";
import openGraphScraper from "open-graph-scraper";

import type {
  AudioBlockObjectComponent,
  BlockObjectComponent,
  BookmarkBlockObjectComponent,
  BreadcrumbBlockObjectComponent,
  BulletedListBlockObjectComponent,
  BulletedListItemBlockObjectComponent,
  CalloutBlockObjectComponent,
  ChildDatabaseBlockObjectComponent,
  ChildPageBlockObjectComponent,
  CodeBlockObjectComponent,
  ColumnBlockObjectComponent,
  ColumnListBlockObjectComponent,
  DividerBlockObjectComponent,
  EmbedBlockObjectComponent,
  EquationBlockObjectComponent,
  FileBlockObjectComponent,
  Heading1BlockObjectComponent,
  Heading2BlockObjectComponent,
  Heading3BlockObjectComponent,
  ImageBlockObjectComponent,
  LinkPreviewBlockObjectComponent,
  LinkToPageBlockObjectComponent,
  ListBlockChildrenResponseResults,
  NumberedListBlockObjectComponent,
  NumberedListItemBlockObjectComponent,
  ParagraphBlockObjectComponent,
  PdfBlockObjectComponent,
  QuoteBlockObjectComponent,
  SyncedBlockBlockObjectComponent,
  TableBlockObjectComponent,
  TableOfContentsBlockObjectComponent,
  TableRowBlockObjectComponent,
  TemplateBlockObjectComponent,
  ToDoBlockObjectComponent,
  ToggleBlockObjectComponent,
  UnsupportedBlockObjectComponent,
  VideoBlockObjectComponent,
} from "@/types/components";
import type { Result } from "@/types/utils";
import type {
  BlockObjectResponse,
  GetBlockParameters,
  GetBlockResponse,
  GetDatabaseParameters,
  GetDatabaseResponse,
  GetPageParameters,
  GetPageResponse,
  ListBlockChildrenParameters,
  ListBlockChildrenResponse,
  ListCommentsParameters,
  ListCommentsResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

// TODO: utils.ts/helpers.tsへ移動させる
export const notNullNorUndefined = <T>(v: T | null | undefined): v is T => {
  return v !== null && v !== undefined;
};

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

const callAPIWithBackOff = async <Args, Item>(
  func: (args: Args) => Promise<Item>,
  args: Args,
  retryCount = 3,
  waitingTimeMS = 1000
): Promise<Result<Item>> => {
  if (retryCount < 1) {
    return {
      payload: undefined,
      error: new Error("retry count exceeded."),
    };
  }

  try {
    const payload = await func({ ...args });
    return {
      payload,
      error: undefined,
    };
  } catch (error) {
    if (isNotionClientError(error)) {
      switch (error.code) {
        case APIErrorCode.RateLimited:
        case APIErrorCode.ConflictError:
        case APIErrorCode.InternalServerError:
        case APIErrorCode.ServiceUnavailable:
        case ClientErrorCode.ResponseError:
        case ClientErrorCode.RequestTimeout: {
          console.log(`retry with error. error code: ${error.code}`);
          if (waitingTimeMS > 0) {
            await new Promise((resolve) => setTimeout(resolve, waitingTimeMS));
          }
          const { payload, error: retryError } = await callAPIWithBackOff(
            func,
            { ...args },
            retryCount--
          );
          if (!retryError) {
            return {
              payload,
              error: undefined,
            };
          }
          break;
        }
        default:
          break;
      }
      return {
        payload: undefined,
        error,
      };
    }
  }
  return {
    payload: undefined,
    error: new Error("Notion api call was failed with unknown error."),
  };
};

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

export const retrieveDatabase = async (
  args: GetDatabaseParameters
): Promise<GetDatabaseResponse | undefined> => {
  const { payload, error } = await callAPIWithBackOff<
    GetDatabaseParameters,
    GetDatabaseResponse
  >(notion.databases.retrieve, args);

  if (!error) {
    return payload;
  }
  return;
};

export const retrievePage = async (
  args: GetPageParameters
): Promise<GetPageResponse | undefined> => {
  const { payload, error } = await callAPIWithBackOff<
    GetPageParameters,
    GetPageResponse
  >(notion.pages.retrieve, args);

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

export const listComments = async (
  args: ListCommentsParameters
): Promise<ListCommentsResponse["results"]> => {
  const { payload, error } = await callAPIWithBackOff<
    ListCommentsParameters,
    ListCommentsResponse
  >(notion.comments.list, args);

  if (!error) {
    if (payload.next_cursor) {
      const nextResults = await listComments({
        ...args,
        start_cursor: payload.next_cursor,
      });
      payload.results = [...payload.results, ...nextResults];
    }

    return payload.results;
  }
  return [];
};

export const fetchDatabase = async (databaseId: string) => {
  const database = await retrieveDatabase({ database_id: databaseId });
  if (!database) {
    return;
  }
  if (!isFullDatabase(database)) {
    return;
  }
  return database;
};

export const fetchPage = async (pageId: string) => {
  const page = await retrievePage({ page_id: pageId });
  if (!page) {
    return;
  }
  if (!isFullPage(page)) {
    return;
  }
  // TODO: propertiesをすべて取得する
  return page;
};

export const fetchBlockComponent = async (blockId: string) => {
  const block = await retrieveBlock({ block_id: blockId });
  if (block) {
    const blockComponent = convertBlockToComponent(block);
    return blockComponent;
  }
  return null;
};

export const fetchBlockComponents = async (blockId: string) => {
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
): Promise<Array<BlockObjectComponent>> => {
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
  blocks: Array<BlockObjectComponent>
): Array<BlockObjectComponent> => {
  return blocks.reduce(
    (
      prevList: Array<BlockObjectComponent>,
      currBlock: BlockObjectComponent
    ): Array<BlockObjectComponent> => {
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
        } satisfies BulletedListBlockObjectComponent;
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
        } satisfies NumberedListBlockObjectComponent;
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
): Promise<BlockObjectComponent | undefined> => {
  if (!isFullBlock(block)) {
    return;
  }
  switch (block.type) {
    case "audio": {
      return block as AudioBlockObjectComponent;
    }
    case "bookmark": {
      const ogMeta = await scrapeOgMeta(block.bookmark.url);
      return {
        ...block,
        bookmark: {
          ...block.bookmark,
          og_meta: ogMeta,
        },
      } satisfies BookmarkBlockObjectComponent;
    }
    case "breadcrumb": {
      // TODO: Parent Pageの情報を取れるところまで取得して、返す
      // NOTE: 権限でPageを取得できなかったなど判定できる?
      const breadcrumbBlockObject = block as BreadcrumbBlockObjectComponent;
      return breadcrumbBlockObject;
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
        } satisfies BulletedListItemBlockObjectComponent;
      }
      return {
        ...block,
      } satisfies BulletedListItemBlockObjectComponent;
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
        } satisfies CalloutBlockObjectComponent;
      }
      return {
        ...block,
      } satisfies CalloutBlockObjectComponent;
    }
    case "child_database": {
      const childDatabase = await fetchDatabase(block.id);
      return {
        ...block,
        child_database: {
          ...block.child_database,
          database: childDatabase,
        },
      } satisfies ChildDatabaseBlockObjectComponent;
    }
    case "child_page": {
      const childPage = await fetchPage(block.id);
      return {
        ...block,
        child_page: {
          ...block.child_page,
          page: childPage,
        },
      } satisfies ChildPageBlockObjectComponent;
    }
    case "code": {
      return block as CodeBlockObjectComponent;
    }
    case "column": {
      return block as ColumnBlockObjectComponent;
    }
    case "column_list": {
      // TODO: childrenとcolumnsの整理をして返す
      return block as ColumnListBlockObjectComponent;
    }
    case "divider": {
      return block as DividerBlockObjectComponent;
    }
    case "embed": {
      return block as EmbedBlockObjectComponent;
    }
    case "equation": {
      return block as EquationBlockObjectComponent;
    }
    case "file": {
      return block as FileBlockObjectComponent;
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
        } satisfies Heading1BlockObjectComponent;
      }
      return {
        ...block,
      } satisfies Heading1BlockObjectComponent;
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
        } satisfies Heading2BlockObjectComponent;
      }
      return {
        ...block,
      } satisfies Heading2BlockObjectComponent;
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
        } satisfies Heading3BlockObjectComponent;
      }
      return {
        ...block,
      } satisfies Heading3BlockObjectComponent;
    }
    case "image": {
      return block as ImageBlockObjectComponent;
    }
    case "link_preview": {
      return block as LinkPreviewBlockObjectComponent;
    }
    case "link_to_page": {
      switch (block.link_to_page.type) {
        case "database_id": {
          const linkedDatabase = await retrieveDatabase({
            database_id: block.link_to_page.database_id,
          });
          return {
            ...block,
            link_to_page: {
              ...block.link_to_page,
              database: linkedDatabase,
            },
          } satisfies LinkToPageBlockObjectComponent;
        }
        case "page_id": {
          const linkedPage = await retrievePage({
            page_id: block.link_to_page.page_id,
          });
          return {
            ...block,
            link_to_page: {
              ...block.link_to_page,
              page: linkedPage,
            },
          } satisfies LinkToPageBlockObjectComponent;
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
          } satisfies LinkToPageBlockObjectComponent;
        }
        default: {
          return;
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
        } satisfies NumberedListItemBlockObjectComponent;
      }
      return {
        ...block,
      } satisfies NumberedListItemBlockObjectComponent;
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
        } satisfies ParagraphBlockObjectComponent;
      }
      return {
        ...block,
      } satisfies ParagraphBlockObjectComponent;
    }
    case "pdf": {
      return block as PdfBlockObjectComponent;
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
        } satisfies QuoteBlockObjectComponent;
      }
      return {
        ...block,
      } satisfies QuoteBlockObjectComponent;
    }
    case "synced_block": {
      if (block.synced_block.synced_from) {
        const duplicatedBlock =
          (await fetchBlockComponent(
            block.synced_block.synced_from.block_id
          )) ?? undefined;
        return {
          ...block,
          synced_block: {
            ...block.synced_block,
            block: duplicatedBlock,
          },
        } satisfies SyncedBlockBlockObjectComponent;
      }
      return { ...block } satisfies SyncedBlockBlockObjectComponent;
    }
    case "table": {
      // TODO: childrenを取得する
      return block as TableBlockObjectComponent;
    }
    case "table_of_contents": {
      return block as TableOfContentsBlockObjectComponent;
    }
    case "table_row": {
      return block as TableRowBlockObjectComponent;
    }
    case "template": {
      return block as TemplateBlockObjectComponent;
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
        } satisfies ToDoBlockObjectComponent;
      }
      return {
        ...block,
      } satisfies ToDoBlockObjectComponent;
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
        } satisfies ToggleBlockObjectComponent;
      }
      return {
        ...block,
      } satisfies ToggleBlockObjectComponent;
    }
    case "unsupported": {
      return block as UnsupportedBlockObjectComponent;
    }
    case "video": {
      return block as VideoBlockObjectComponent;
    }
    default: {
      return;
    }
  }
};

export const scrapeOgMeta = async (
  url: string
): Promise<
  | {
      title?: string;
      description?: string;
      image?: {
        url: string;
        type?: string;
        width?: number;
        height?: number;
      };
      icon?: string;
    }
  | undefined
> => {
  const { error, result } = await openGraphScraper({ url });
  if (!error) {
    const { ogTitle, ogDescription, ogImage, favicon } = result;
    return {
      title: ogTitle,
      description: ogDescription,
      image: ogImage ? ogImage[0] : undefined,
      icon: favicon,
    };
  }
  return undefined;
};
import "dotenv/config";

(async () => {
  const res = await fetchBlockComponents("2712e341754a41aea9ce4c0bb4b18c52");
  console.log(JSON.stringify(res, null, 2));
})();
