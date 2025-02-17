import type { PageObject } from "./page";
import type { RichTextType } from "./richText/richText";
import type { Overwrite } from "../utils";
import type {
  DatabaseObjectResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type DatabaseObject = Overwrite<
  DatabaseObjectResponse,
  {
    title: RichTextType;
    description: RichTextType;
  }
>;

export type QueryDatabaseObject = Overwrite<
  QueryDatabaseResponse,
  {
    results: PageObject[];
  }
>;
