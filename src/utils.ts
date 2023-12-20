import type { DatabaseObject } from "./types/notion/database.js";
import type { PageObject } from "./types/notion/page.js";
import type {
  PropertyItemType,
  PropertyItemObjectResponse,
} from "./types/notion/property/properties.js";
import type { TitlePropertyItemObject } from "./types/notion/property/title.js";
import type { RichTextType } from "./types/notion/richText/richText.js";
import type {
  DatabaseObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

type PageOrDatabasePropertyItems =
  | PropertyItemObjectResponse
  | PropertyItemType
  | DatabaseObject["properties"][string];

type PageOrDatabaseProperties = Record<string, PageOrDatabasePropertyItems>;

type SplittedProperties<T extends PageOrDatabaseProperties> = {
  title: TitlePropertyItemObject;
  other: T;
};

export const splitTitleAndOtherProperties = <
  T extends PageOrDatabaseProperties,
>(
  properties: T,
): SplittedProperties<T> => {
  const title = Object.values(properties).find<TitlePropertyItemObject>(
    (value): value is TitlePropertyItemObject => isTitleProperty(value),
  ) ?? { id: "", type: "title", title: [] };

  const other = Object.fromEntries(
    Object.entries(properties).filter(
      ([key, value]) => !isTitleProperty(value),
    ),
  ) as T;

  return { title, other };
};

export const extractTitle = (
  pageOrDatabase: PageObject | PageObjectResponse | DatabaseObjectResponse,
): RichTextType => {
  if (pageOrDatabase.object === "page") {
    const { title } = splitTitleAndOtherProperties(pageOrDatabase.properties);
    return title?.title ?? [];
  }

  if (pageOrDatabase.object === "database") {
    return pageOrDatabase.title;
  }

  return [];
};

export const isTitleProperty = (
  property: PageOrDatabasePropertyItems,
): property is TitlePropertyItemObject => property.type === "title";

export const selectPropertyById = <T extends PageOrDatabaseProperties>(
  properties: T,
  id: string,
): T | undefined => {
  const name = Object.keys(properties).find((key) => properties[key].id === id);
  if (name) {
    const selected = properties[name];
    return { [name]: selected } as T;
  }
  return;
};

export const selectPropertyByName = <T extends PageOrDatabaseProperties>(
  properties: T,
  key: string,
): T | undefined => {
  const selected = properties[key];

  if (selected) {
    return { [key]: selected } as T;
  }

  return;
};

export const selectProperties = <T extends PageOrDatabaseProperties>(
  properties: T,
  selector: Array<string>,
): T => {
  const selected = selector.reduce((prev, keyOrId) => {
    const selectedByName = selectPropertyByName(properties, keyOrId);
    if (selectedByName) {
      return { ...prev, ...selectedByName };
    }

    const selectedById = selectPropertyById(properties, keyOrId);
    if (selectedById) {
      return { ...prev, ...selectedById };
    }

    return { ...prev };
  }, {} as T);

  return selected;
};
