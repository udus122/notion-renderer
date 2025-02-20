import type { BlockBlockProps } from "./block";
import type {
  ChildPageBlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type ChildPageBlockObject = ChildPageBlockObjectResponse & {
  child_page: {
    page?: PageObjectResponse;
  };
};

export type ChildPageBlockProps = BlockBlockProps<ChildPageBlockObject>;

export type ChildPageBlock = ComponentType<ChildPageBlockProps>;
