import type { RichText } from "./richText/richText.js";
import type { Overwrite } from "../utils.js";
import type { DatabaseObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";

export type DatabaseObject = Overwrite<
  DatabaseObjectResponse,
  {
    title: RichText;
  }
>;