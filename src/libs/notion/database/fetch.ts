import { isFullDatabase } from "@notionhq/client";

import { convertResponseToRichText } from "../richText/richText.js";

import { retrieveDatabase } from "./retrieve.js";

import type { DatabaseObject } from "../../../types/notion/database.js";
import type { Result } from "../../../types/utils.js";
import type { GetDatabaseParameters } from "@notionhq/client/build/src/api-endpoints.js";

export const fetchDatabase = async (
  args: GetDatabaseParameters,
): Promise<Result<DatabaseObject>> => {
  const { ok, data } = await retrieveDatabase(args);

  if (!ok) {
    return { ok, data };
  }

  if (!isFullDatabase(data)) {
    return { ok: false, data: new Error("Database is not full") };
  }

  const databaseObject = {
    ...data,
    title: await convertResponseToRichText(data.title),
    description: await convertResponseToRichText(data.description),
  } satisfies DatabaseObject;

  return { ok: true, data: databaseObject };
};
