import type { TemplateBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { TemplateBlockObject } from "src/components/Blocks/Template.js";

export const convertTemplateResponseToBlock = async (
  block: TemplateBlockObjectResponse
) => {
  return { ...block } satisfies TemplateBlockObject;
};
