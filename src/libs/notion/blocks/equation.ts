import type { EquationBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export type EquationBlockObject = EquationBlockObjectResponse & {
  equation: {
    expression: string;
  };
};

export const convertEquationResponseToBlock = async (
  block: EquationBlockObjectResponse
) => {
  return { ...block } satisfies EquationBlockObject;
};
