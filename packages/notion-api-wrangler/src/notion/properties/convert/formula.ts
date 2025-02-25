import type { FormulaPropertyItemObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { FormulaPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const convertResponseToFormulaPropertyItem = (
  property: FormulaPropertyItemObjectResponse,
  client: Client,
): FormulaPropertyItemObject => {
  return {
    ...property,
  } satisfies FormulaPropertyItemObject;
};
