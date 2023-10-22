import { listComments } from "../comments.js";
import { fetchDatabase } from "../databases.js";
import { fetchPage } from "../pages.js";

import type {
  DatabaseObjectResponse,
  LinkToPageBlockObjectResponse,
  ListCommentsResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";
import type { IdRequest } from "src/types/notion.js";

export type LinkToPageBlockObject = LinkToPageBlockObjectResponse & {
  link_to_page:
    | {
        type: "page_id";
        page_id: IdRequest;
        page?: PageObjectResponse;
      }
    | {
        type: "database_id";
        database_id: IdRequest;
        database?: DatabaseObjectResponse;
      }
    | {
        type: "comment_id";
        comment_id: IdRequest;
        comments?: ListCommentsResponse["results"];
      };
};

export const convertLinkToPageResponseToBlock = async (
  block: LinkToPageBlockObjectResponse
) => {
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
};
