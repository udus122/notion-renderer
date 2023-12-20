import type { Properties } from "./property/properties.js";
import type { Overwrite } from "../utils.js";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export type PageObject = Overwrite<
  PageObjectResponse,
  {
    properties: Properties;
  }
>;
