import type { BlockProps } from "../common.js";
import type { TableOfContentsBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type TableOfContentsBlockObject = TableOfContentsBlockObjectResponse;

export type TableOfContentsBlockProps = BlockProps<TableOfContentsBlockObject>;

export type TableOfContentsBlock = ComponentType<TableOfContentsBlockProps>;
