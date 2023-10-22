import { fetchBlocks } from "./blocks.js";

import type { ToDoBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ToDoBlockObject } from "src/components/Blocks/ToDo.js";

export const convertToDoResponseToBlock = async (
  block: ToDoBlockObjectResponse
) => {
  if (block.has_children) {
    const children = await fetchBlocks(block.id);
    return {
      ...block,
      to_do: {
        ...block.to_do,
        children,
      },
    } satisfies ToDoBlockObject;
  }
  return {
    ...block,
  } satisfies ToDoBlockObject;
};
