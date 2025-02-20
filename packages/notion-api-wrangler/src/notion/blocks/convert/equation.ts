import type { EquationBlockObject } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { EquationBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const convertEquationResponseToBlock = async (
  block: EquationBlockObjectResponse,
  client: Client,
): Promise<EquationBlockObject> => {
  return { ...block } satisfies EquationBlockObject;
};
