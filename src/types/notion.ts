import type {
  ListBlockChildrenResponse,
  RichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export type AnnotationType = RichTextItemResponse["annotations"];

export type ListBlockChildrenResponseResults =
  ListBlockChildrenResponse["results"];

export type IdRequest = string | string;

export type EmojiRequest = string;

export type TextRequest = string;

export type Icon =
  | {
      type: "emoji";
      emoji: EmojiRequest;
    }
  | {
      type: "external";
      external: {
        url: TextRequest;
      };
    }
  | {
      type: "file";
      file: {
        url: string;
        expiry_time: string;
      };
    }
  | null;
