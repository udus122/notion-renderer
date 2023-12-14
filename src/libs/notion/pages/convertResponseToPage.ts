import { notUndefined } from "../../../libs/utils/utils.js";

import { fetchPageProperty } from "./properties/properties.js";

import type { PageObject } from "../../../types/notion/pages/page.js";
import type { PropertyValue } from "../../../types/notion/pages/properties/properties.js";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToPage = async (
  page: PageObjectResponse,
): Promise<PageObject> => {
  const properties = Object.fromEntries<PropertyValue>(
    (
      await Promise.all(
        Object.entries(page.properties).map<
          Promise<[string, PropertyValue] | undefined>
        >(async ([key, value]) => {
          const { ok, data } = await fetchPageProperty({
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
