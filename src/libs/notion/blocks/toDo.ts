import { convertResponseToRichText } from "../richText/richText.js";

import { fetchBlockList } from "./blocks.js";

import type { ToDoBlockObject } from "../../../types/notion/blocks/toDo.js";
import type { ToDoBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertToDoResponseToBlock = async (
  block: ToDoBlockObjectResponse,
) => {
  if (block.has_children) {
    const children = await fetchBlockList({ block_id: block.id });
    return {
      ...block,
      to_do: {
        ...block.to_do,
        rich_text: await convertResponseToRichText(block.to_do.rich_text),
        children,
      },
    } satisfies ToDoBlockObject;
  }
  return {
    ...block,
    to_do: {
      ...block.to_do,
      rich_text: await convertResponseToRichText(block.to_do.rich_text),
    },
  } satisfies ToDoBlockObject;
};
