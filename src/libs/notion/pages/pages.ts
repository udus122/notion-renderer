import { isFullPage } from "@notionhq/client";

import { callAPIWithBackOff } from "../../utils.js";
import { notion } from "../auth.js";

import type {
  GetPageParameters,
  GetPageResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export const retrievePage = async (
  args: GetPageParameters
): Promise<GetPageResponse | undefined> => {
  const { payload, error } = await callAPIWithBackOff<
    GetPageParameters,
    GetPageResponse
  >(notion.pages.retrieve, args);

  if (!error) {
    return payload;
  }
  return;
};

export const fetchPage = async (pageId: string) => {
  const page = await retrievePage({ page_id: pageId });
  if (!page) {
    return;
  }
  if (!isFullPage(page)) {
    return;
  }
  // TODO: propertiesをすべて取得する
  return page;
};

import "dotenv/config";
const res = await fetchPage("696a56fa0c6842709fe6165c403abc76");
