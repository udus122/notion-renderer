import { notUndefined } from "../../utils/utils.js";
import { fetchPageProperty } from "../properties/fetch.js";

import type { PageObject } from "../../../types/notion/pages/page.js";
import type { PropertyItem } from "../../../types/notion/pages/properties/properties.js";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToPage = async (
  page: PageObjectResponse,
): Promise<PageObject> => {
  const properties = Object.fromEntries<PropertyItem>(
    (
      await Promise.all(
        Object.entries(page.properties).map<
          Promise<[string, PropertyItem] | undefined>
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
