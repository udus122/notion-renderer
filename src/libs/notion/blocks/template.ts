import type { TemplateBlockObject } from "../../../types/notion/blocks/template.js";
import type { TemplateBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertTemplateResponseToBlock = async (
  block: TemplateBlockObjectResponse,
): Promise<TemplateBlockObject> => {
  return { ...block } satisfies TemplateBlockObject;
};
