import { convertResponseToPropertyItem } from "./convert/convertResponseToPropertyItem.js";
import { retrievePageProperty } from "./retrieve.js";

import type { PropertyItemType } from "../../../types/notion/property/properties.js";
import type { Result } from "../../../types/utils.js";
import type { Client } from "@notionhq/client";
import type { GetPagePropertyParameters } from "@notionhq/client/build/src/api-endpoints.js";

export const fetchPageProperty = async (
  client: Client,
  args: GetPagePropertyParameters,
): Promise<Result<PropertyItemType>> => {
  const { ok, data } = await retrievePageProperty(client, args);

  if (!ok) {
    return { ok, data };
  }

  const pagePropertyObject = await convertResponseToPropertyItem(data, client);

  return { ok: true, data: pagePropertyObject };
};
