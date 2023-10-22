import { randomUUID } from "crypto";

import type { EquationRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

export type EquationRichTextItem = EquationRichTextItemResponse & {
  id?: string;
};

export const convertEquationRichTextItemResponse = async (
  response: EquationRichTextItemResponse
) => {
  return {
    ...response,
    id: randomUUID(),
  };
};
