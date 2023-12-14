import { convertResponseToPropertyValue } from "./convert/convertResponseToPropertyValue.js";
import { retrievePageProperty } from "./properties.js";

import type { PropertyValue } from "../../../types/notion/pages/properties/properties.js";
import type { Result } from "../../../types/utils.js";
import type { GetPagePropertyParameters } from "@notionhq/client/build/src/api-endpoints.js";

export const fetchPageProperty = async (
  args: GetPagePropertyParameters,
): Promise<Result<PropertyValue>> => {
  const { ok, data } = await retrievePageProperty(args);

  if (!ok) {
    return { ok, data };
  }

  const pagePropertyObject = await convertResponseToPropertyValue(data);

  return { ok: true, data: pagePropertyObject };
};
