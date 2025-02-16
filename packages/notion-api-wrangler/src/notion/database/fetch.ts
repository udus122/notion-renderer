import { Client, isFullDatabase } from "@notionhq/client";

import { convertResponseToRichText } from "../richText/richText.js";

import { retrieveDatabase } from "./retrieve.js";

import type { DatabaseObject } from "@udus/notion-types";
import type { Result } from "@udus/notion-types";
import type { GetDatabaseParameters } from "@notionhq/client/build/src/api-endpoints.js";

export const fetchDatabase = async (
  client: Client,
  args: GetDatabaseParameters,
): Promise<Result<DatabaseObject>> => {
  const { ok, data } = await retrieveDatabase(client, args);

  if (!ok) {
    return { ok, data };
  }

  if (!isFullDatabase(data)) {
    return { ok: false, data: new Error("Database is not full") };
  }

  const databaseObject = {
    ...data,
    title: await convertResponseToRichText(data.title, client),
    description: await convertResponseToRichText(data.description, client),
  } satisfies DatabaseObject;

  return { ok: true, data: databaseObject };
};
