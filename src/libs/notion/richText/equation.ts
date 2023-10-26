import { generateUUID } from "../../utils.js";

import type { EquationRichTextItem } from "../../../types/notion.js";
import type { EquationRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertEquationRichTextItemResponse = async (
  response: EquationRichTextItemResponse
) => {
  return {
    ...response,
    id: generateUUID(),
  } satisfies EquationRichTextItem;
};
