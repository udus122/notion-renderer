import type { EquationBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { EquationBlockObject } from "src/components/Blocks/Equation.js";

export const convertEquationResponseToBlock = async (
  block: EquationBlockObjectResponse
) => {
  return { ...block } satisfies EquationBlockObject;
};
