import type { BlockBlockProps } from "./block.js";
import type { IdRequest } from "../common/common.js";
import type {
  LinkToPageBlockObjectResponse,
  PageObjectResponse,
  DatabaseObjectResponse,
  ListCommentsResponse,
} from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

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

export type LinkToPageBlockProps = BlockBlockProps<LinkToPageBlockObject>;

export type LinkToPageBlock = ComponentType<LinkToPageBlockProps>;
