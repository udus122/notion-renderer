import type { FilesPropertyItemObject } from "../../../../types/notion/property/files.js";
import type { Client } from "@notionhq/client";
import type { FilesPropertyItemObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToFilesPropertyItem = (
  property: FilesPropertyItemObjectResponse,
  client: Client,
): FilesPropertyItemObject => {
  return {
    ...property,
  } satisfies FilesPropertyItemObject;
};
