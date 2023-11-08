import { isFullPage } from "@notionhq/client";

import { callAPIWithBackOff } from "../../utils.js";
import { notion } from "../auth.js";

import { fetchPageProperty } from "./properties/properties.js";

import type { PageObject } from "../../../types/notion/pages/page.js";
import type { Properties } from "../../../types/notion/pages/properties/properties.js";
import type {
  GetPageParameters,
  GetPagePropertyResponse,
  GetPageResponse,
  PageObjectResponse,
  PartialPageObjectResponse,
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

export const fetchPage = async (
  pageId: string
): Promise<PageObject | undefined> => {
  const pageObjectResponse = await retrievePage({ page_id: pageId });

  if (!pageObjectResponse) {
    return;
  }

  const pageObject = await convertResponseToPage(pageObjectResponse);
  return pageObject;
};

export const convertResponseToPage = async (
  page: PageObjectResponse | PartialPageObjectResponse
): Promise<PageObject | undefined> => {
  if (!isFullPage(page)) {
    return;
  }

  const properties = Object.fromEntries(
    await Promise.all(
      Object.entries(page.properties).map(async ([key, value]) => {
        const property = (await fetchPageProperty(
          page.id,
          value.id
        )) as GetPagePropertyResponse;
        return [key, property];
      })
    )
  ) as Properties;

  return {
    ...page,
    properties,
  } satisfies PageObject;
};
