import type { FilesPropertyItemObject } from "../../../../types/notion/pages/properties/files.js";
import type { FilesPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToFilesPropertyItem = (
  property: FilesPropertyItemObjectResponse
): FilesPropertyItemObject => {
  return {
    ...property,
  } satisfies FilesPropertyItemObject;
};
