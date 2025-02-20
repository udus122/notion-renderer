import type { TemplateBlock } from "@udus/notion-types";

export const Template: TemplateBlock = ({ block }) => {
  console.warn(`${block.type} is not supported`);
  return null;
};
