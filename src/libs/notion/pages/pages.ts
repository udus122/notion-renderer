import { isFullPage } from "@notionhq/client";

import { callAPIWithBackOff } from "../../utils.js";
import { notion } from "../auth.js";

import { fetchPageProperty } from "./properties.js";

import type {
  GetPageParameters,
  GetPagePropertyResponse,
  GetPageResponse,
  PageObjectResponse,
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

  const properties = Object.fromEntries(
    await Promise.all(
      Object.entries(page.properties).map(async ([key, value]) => {
        const property = (await fetchPageProperty(
          pageId,
          value.id
        )) as GetPagePropertyResponse;
        return [key, property];
      })
    )
  ) as PageObjectResponse["properties"];

  return {
    ...page,
    properties,
  } satisfies PageObjectResponse;
};
