import { generateUUID } from "../../utils/utils.js";

import type { EquationRichTextItemObject } from "@repo/notion-types";
import type { EquationRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertEquationRichTextItemResponse = async (
  response: EquationRichTextItemResponse,
): Promise<EquationRichTextItemObject> => {
  return {
    ...response,
    id: generateUUID(),
  } satisfies EquationRichTextItemObject;
};
