import type { BlockBlockProps } from "./block.js";
import type { PageObject } from "../pages/page.js";
import type { ChildPageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type ChildPageBlockObject = ChildPageBlockObjectResponse & {
  child_page: {
    page?: PageObject;
  };
};

export type ChildPageBlockProps = BlockBlockProps<ChildPageBlockObject>;

export type ChildPageBlock = ComponentType<ChildPageBlockProps>;
