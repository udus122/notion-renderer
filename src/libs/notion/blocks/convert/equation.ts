import type { EquationBlockObject } from "../../../../types/notion/block/equation.js";
import type { Client } from "@notionhq/client";
import type { EquationBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertEquationResponseToBlock = async (
  block: EquationBlockObjectResponse,
  client: Client,
): Promise<EquationBlockObject> => {
  return { ...block } satisfies EquationBlockObject;
};
