import type { FormulaPropertyItemObject } from "../../../../types/notion/property/formula.js";
import type { FormulaPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToFormulaPropertyItem = (
  property: FormulaPropertyItemObjectResponse,
): FormulaPropertyItemObject => {
  return {
    ...property,
  } satisfies FormulaPropertyItemObject;
};
