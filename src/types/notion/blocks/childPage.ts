import type { BlockProps } from "../common.js";
import type {
  ChildPageBlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type ChildPageBlockObject = ChildPageBlockObjectResponse & {
  child_page: {
    page?: PageObjectResponse;
  };
};

export type ChildPageBlockProps = BlockProps<ChildPageBlockObject>;

export type ChildPageBlock = ComponentType<ChildPageBlockProps>;
