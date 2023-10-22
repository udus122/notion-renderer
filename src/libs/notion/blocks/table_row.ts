import type { TableRowBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { TableRowBlockObject } from "src/components/Blocks/Table.js";

export const convertTableRowResponseToBlock = async (
  block: TableRowBlockObjectResponse
) => {
  return { ...block } satisfies TableRowBlockObject;
};
