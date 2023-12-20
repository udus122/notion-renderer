import { convertResponseToPropertyItem } from "./convert/convertResponseToPropertyItem.js";
import { retrievePageProperty } from "./retrieve.js";

import type { PropertyItem } from "../../../types/notion/property/properties.js";
import type { Result } from "../../../types/utils.js";
import type { GetPagePropertyParameters } from "@notionhq/client/build/src/api-endpoints.js";

export const fetchPageProperty = async (
  args: GetPagePropertyParameters,
): Promise<Result<PropertyItem>> => {
  const { ok, data } = await retrievePageProperty(args);

  if (!ok) {
    return { ok, data };
  }

  const pagePropertyObject = await convertResponseToPropertyItem(data);

  return { ok: true, data: pagePropertyObject };
};
