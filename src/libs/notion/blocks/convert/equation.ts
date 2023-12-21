import type { EquationBlockObject } from "../../../../types/notion/block/equation.js";
import type { EquationBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertEquationResponseToBlock = async (
  block: EquationBlockObjectResponse,
): Promise<EquationBlockObject> => {
  return { ...block } satisfies EquationBlockObject;
};