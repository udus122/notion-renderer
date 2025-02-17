import type { RichTextItemProps } from "./richTextItem";
import type { Overwrite } from "../../utils";
import type { ArticleData } from "@extractus/article-extractor";
import type {
  DatabaseObjectResponse,
  MentionRichTextItemResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type MentionRichTextItemObject = Overwrite<
  MentionRichTextItemResponse,
  {
    mention: MentionObject;
  }
> & { id?: string };

export type MentionRichTextItemProps =
  RichTextItemProps<MentionRichTextItemObject>;

export type MentionRichTextItem = ComponentType;

export type MentionObject =
  | UserMentionObject
  | DateMentionObject
  | LinkPreviewMentionObject
  | TemplateMentionMentionObject
  | PageMentionObject
  | DatabaseMentionObject;

export type MentionObjectResponse = MentionRichTextItemResponse["mention"];

export type UserMentionObjectResponse = Extract<
  MentionObjectResponse,
  { type: "user" }
>;

export type DateMentionObjectResponse = Extract<
  MentionObjectResponse,
  {
    type: "date";
  }
>;

export type LinkPreviewMentionObjectResponse = Extract<
  MentionObjectResponse,
  {
    type: "link_preview";
  }
>;

export type TemplateMentionMentionObjectResponse = Extract<
  MentionObjectResponse,
  {
    type: "template_mention";
  }
>;

export type PageMentionObjectResponse = Extract<
  MentionObjectResponse,
  {
    type: "page";
  }
>;

export type DatabaseMentionObjectResponse = Extract<
  MentionObjectResponse,
  {
    type: "database";
  }
>;

export type UserMentionObject = UserMentionObjectResponse;

export type DateMentionObject = DateMentionObjectResponse;

export type LinkPreviewMentionObject = LinkPreviewMentionObjectResponse & {
  link_preview: { site_meta?: ArticleData };
};

export type TemplateMentionMentionObject = TemplateMentionMentionObjectResponse;

export type PageMentionObject = PageMentionObjectResponse & {
  page: { page?: PageObjectResponse };
};

export type DatabaseMentionObject = DatabaseMentionObjectResponse & {
  database: { database?: DatabaseObjectResponse };
};
