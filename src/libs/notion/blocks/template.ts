import type { TemplateBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export type TemplateBlockObject = TemplateBlockObjectResponse;

export const convertTemplateResponseToBlock = async (
  block: TemplateBlockObjectResponse
) => {
  return { ...block } satisfies TemplateBlockObject;
};
