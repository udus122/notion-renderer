import type { BlockBlockProps } from "./block";
import type { TemplateBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type TemplateBlockObject = TemplateBlockObjectResponse;

export type TemplateBlockProps = BlockBlockProps<TemplateBlockObject>;

export type TemplateBlock = ComponentType<TemplateBlockProps>;
