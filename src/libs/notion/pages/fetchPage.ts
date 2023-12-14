import { isFullPage } from "@notionhq/client";

import { convertResponseToPage } from "./convert.js";
import { retrievePage } from "./pages.js";

import type { PageObject } from "../../../types/notion/pages/page.js";
import type { Result } from "../../../types/utils.js";
import type { GetPageParameters } from "@notionhq/client/build/src/api-endpoints.js";

export const fetchPage = async (
  args: GetPageParameters,
): Promise<Result<PageObject>> => {
  const { ok, data } = await retrievePage(args);

  if (!ok) {
    return { ok, data };
  }

  if (!isFullPage(data)) {
    return { ok: false, data: new Error("Page is not full") };
  }

  const pageObject = await convertResponseToPage(data);

  if (!pageObject) {
    return { ok: false, data: new Error("Failed to convert to page object") };
  }

  return { ok: true, data: pageObject };
};

import "dotenv/config";

const res = await fetchPage({
  page_id: "696a56fa0c6842709fe6165c403abc76",
});
console.log(JSON.stringify(res, null, 2));
