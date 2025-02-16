import type { TemplateBlockObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { TemplateBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertTemplateResponseToBlock = async (
  block: TemplateBlockObjectResponse,
  client: Client,
): Promise<TemplateBlockObject> => {
  return { ...block } satisfies TemplateBlockObject;
};
