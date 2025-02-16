import type { BlockBlockProps } from "./block.js";
import type { DividerBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type DividerBlockObject = DividerBlockObjectResponse;

export type DividerBlockProps = BlockBlockProps<DividerBlockObject>;

export type DividerBlock = ComponentType<DividerBlockProps>;
