import type { FormulaPropertyItemObject } from "../../../../types/notion/pages/properties/formula.js";
import type { FormulaPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToFormulaPropertyItem = (
  property: FormulaPropertyItemObjectResponse
): FormulaPropertyItemObject => {
  return {
    ...property,
  } satisfies FormulaPropertyItemObject;
};
