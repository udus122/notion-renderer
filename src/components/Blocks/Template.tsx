import type { TemplateBlock } from "../../types/notion/blocks/template.js";

export const Template: TemplateBlock = ({ block }) => {
  console.warn(`${block.type} is not supported`);
  return null;
};
