import { generateUUID } from "../../utils/utils";

import type { EquationRichTextItemObject } from "@udus/notion-types";
import type { EquationRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

export const convertEquationRichTextItemResponse = async (
  response: EquationRichTextItemResponse,
): Promise<EquationRichTextItemObject> => {
  return {
    ...response,
    id: generateUUID(),
  } satisfies EquationRichTextItemObject;
};
