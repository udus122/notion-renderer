import type { BlockBlockProps } from "./block";
import type { DividerBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type DividerBlockObject = DividerBlockObjectResponse;

export type DividerBlockProps = BlockBlockProps<DividerBlockObject>;

export type DividerBlock = ComponentType<DividerBlockProps>;
