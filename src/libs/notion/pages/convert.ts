import { notUndefined } from "../../utils/utils.js";
import { fetchPageProperty } from "../properties/fetch.js";

import type { PageObject } from "../../../types/notion/page.js";
import type { PropertyItemType } from "../../../types/notion/property/properties.js";
import type { Client } from "@notionhq/client";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

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

      // NOTE: wait 1sec to avoid 429 error
      await new Promise((resolve) => setTimeout(resolve, 1000));

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
