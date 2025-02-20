import { notUndefined } from "../../utils";
import { fetchPageProperty } from "../properties/fetch";

import type { PageObject, PropertyItemType } from "@udus/notion-types";
import type { Client } from "@notionhq/client";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export const convertResponseToPage = async (
  page: PageObjectResponse,
  client: Client,
): Promise<PageObject> => {
  const propertiesEntries = await Object.entries(page.properties).reduce(
    async (previousPromise, [key, value]) => {
      const accumulator = await previousPromise;
      const { ok, data } = await fetchPageProperty(client, {
        page_id: page.id,
        property_id: value.id,
      });

      if (!ok) {
        return accumulator;
      }

      accumulator.push([key, data as PropertyItemType]);
      return accumulator;
    },
    Promise.resolve([] as Array<[string, PropertyItemType]>),
  );

  const properties = Object.fromEntries<PropertyItemType>(
    propertiesEntries.filter(notUndefined),
  );

  return {
    ...page,
    properties,
  } satisfies PageObject;
};
