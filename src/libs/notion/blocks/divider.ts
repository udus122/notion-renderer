import type { DividerBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export type DividerBlockObject = DividerBlockObjectResponse;

export const convertDividerResponseToBlock = async (
  block: DividerBlockObjectResponse
) => {
  return { ...block } satisfies DividerBlockObject;
};
