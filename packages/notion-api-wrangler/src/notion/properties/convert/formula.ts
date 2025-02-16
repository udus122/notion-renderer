import type { FormulaPropertyItemObject } from "@repo/notion-types";
import type { Client } from "@notionhq/client";
import type { FormulaPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToFormulaPropertyItem = (
  property: FormulaPropertyItemObjectResponse,
  client: Client,
): FormulaPropertyItemObject => {
  return {
    ...property,
  } satisfies FormulaPropertyItemObject;
};
