import { convertResponseToPropertyItem } from "./convert/convertResponseToPropertyItem.js";
import { retrievePageProperty } from "./retrieve.js";

import type { PropertyItemType ,Result} from "@udus/notion-types";
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
