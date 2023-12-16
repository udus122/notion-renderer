import { generateUUID } from "./libs/utils/utils.js";

import type { DatabaseObject } from "./types/notion/database.js";
import type { PageObject } from "./types/notion/pages/page.js";
import type {
  PropertyValue,
  PropertyValueObjectResponse,
} from "./types/notion/pages/properties/properties.js";
import type { TitlePropertyItemObject } from "./types/notion/pages/properties/title.js";
import type { RichText } from "./types/notion/richText/richText.js";
import type {
  DatabaseObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

type PageOrDatabasePropertyValues =
  | PropertyValueObjectResponse
  | PropertyValue
  | DatabaseObject["properties"][string];

type PageOrDatabaseProperties = Record<string, PageOrDatabasePropertyValues>;

type SplittedProperties<T extends PageOrDatabaseProperties> = {
  title: TitlePropertyItemObject;
  other: T;
};

export const splitTitleAndOtherProperties = <
  T extends PageOrDatabaseProperties,
>(
  properties: T,
): SplittedProperties<T> => {
  let title: TitlePropertyItemObject = {
    type: "title",
    title: [],
    id: generateUUID(),
  };

  Object.entries(properties).forEach(([key, value]) => {
    if (isTitleProperty(value)) {
      title = value;
      delete properties[key];
    }
  });

  return { title, other: properties };
};

export const extractTitle = (
  pageOrDatabase: PageObject | PageObjectResponse | DatabaseObjectResponse,
): RichText => {
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
  property: PageOrDatabasePropertyValues,
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
