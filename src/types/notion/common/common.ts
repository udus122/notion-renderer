import type { Heading1BlockObject } from "../blocks/heading1.js";
import type { Heading2BlockObject } from "../blocks/heading2.js";
import type { Heading3BlockObject } from "../blocks/heading3.js";
import type { ToggleBlockObject } from "../blocks/toggle.js";
import type {
  DatabaseObjectResponse,
  DatePropertyItemObjectResponse,
  ListBlockChildrenResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export type TogglableBlockObjectComponent =
  | ToggleBlockObject
  | Heading1BlockObject
  | Heading2BlockObject
  | Heading3BlockObject;

export type ListBlockChildrenResponseResults =
  ListBlockChildrenResponse["results"];

export type IdRequest = string | string;

export type EmojiRequest = string;

export type TextRequest = string;

export type CoverObject =
  | PageObjectResponse["cover"]
  | DatabaseObjectResponse["cover"];

export type NotionHostedFile = {
  type?: "file";
  file: {
    url: string;
    expiry_time: string;
  };
  name?: string;
};

export type ExternalFile = {
  type?: "external";
  external: {
    url: TextRequest;
  };
  name?: string;
};

export type FileObject = ExternalFile | NotionHostedFile;

export type DateResponse = DatePropertyItemObjectResponse["date"];
