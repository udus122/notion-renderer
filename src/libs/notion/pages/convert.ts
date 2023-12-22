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
  const properties = Object.fromEntries<PropertyItemType>(
    (
      await Promise.all(
        Object.entries(page.properties).map<
          Promise<[string, PropertyItemType] | undefined>
        >(async ([key, value]) => {
          const { ok, data } = await fetchPageProperty(client, {
            page_id: page.id,
            property_id: value.id,
          });

          if (!ok) {
            return;
          }
          return [key, data];
        }),
      )
    ).filter(notUndefined),
  );

  return {
    ...page,
    properties,
  } satisfies PageObject;
};
