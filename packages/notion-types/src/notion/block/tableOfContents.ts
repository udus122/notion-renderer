import type { BlockBlockProps } from "./block";
import type { TableOfContentsBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type TableOfContentsBlockObject = TableOfContentsBlockObjectResponse;

export type TableOfContentsBlockProps =
  BlockBlockProps<TableOfContentsBlockObject>;

export type TableOfContentsBlock = ComponentType<TableOfContentsBlockProps>;
