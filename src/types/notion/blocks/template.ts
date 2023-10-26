import type { BlockProps } from "../common.js";
import type { TemplateBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type TemplateBlockObject = TemplateBlockObjectResponse;

export type TemplateBlockProps = BlockProps<TemplateBlockObject>;

export type TemplateBlock = ComponentType<TemplateBlockProps>;
