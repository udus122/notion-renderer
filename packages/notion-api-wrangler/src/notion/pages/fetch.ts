import { Client, isFullPage } from "@notionhq/client";

import { convertResponseToPage } from "./convert.js";
import { retrievePage } from "./retrieve.js";

import type { PageObject, Result } from "@udus/notion-types";
import type { GetPageParameters } from "@notionhq/client/build/src/api-endpoints.js";

export const fetchPage = async (
  client: Client,
  args: GetPageParameters,
): Promise<Result<PageObject>> => {
  const { ok, data } = await retrievePage(client, args);

  if (!ok) {
    return { ok, data };
  }

  if (!isFullPage(data)) {
    return { ok: false, data: new Error("Page is not full") };
  }

  const pageObject = await convertResponseToPage(data, client);

  if (!pageObject) {
    return { ok: false, data: new Error("Failed to convert to page object") };
  }

  return { ok: true, data: pageObject };
};
