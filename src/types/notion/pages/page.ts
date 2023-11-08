import type { Properties } from "./properties/properties.js";
import type { Overwrite } from "../../../types/utils.js";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export type PageObject = Overwrite<
  PageObjectResponse,
  {
    properties: Properties;
  }
>;
