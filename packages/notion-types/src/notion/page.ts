import type { PropertiesType } from "./property/properties";
import type { Overwrite } from "../utils";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type PageObject = Overwrite<
  PageObjectResponse,
  {
    properties: PropertiesType;
  }
>;
