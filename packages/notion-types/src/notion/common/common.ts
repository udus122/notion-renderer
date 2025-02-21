import type { Heading1BlockObject } from "../block/heading1";
import type { Heading2BlockObject } from "../block/heading2";
import type { Heading3BlockObject } from "../block/heading3";
import type { ToggleBlockObject } from "../block/toggle";
import type {
  DatabaseObjectResponse,
  DatePropertyItemObjectResponse,
  ListBlockChildrenResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

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
