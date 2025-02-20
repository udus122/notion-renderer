import type { BlockBlockProps } from "./block";
import type { RichTextItemType } from "../richText/richTextItem";
import type { ArticleData } from "@extractus/article-extractor";
import type { BookmarkBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type BookmarkBlockObject = BookmarkBlockObjectResponse & {
  bookmark: {
    site_meta?: ArticleData;
    caption: Array<RichTextItemType>;
  };
};

export type BookmarkBlockProps = BlockBlockProps<BookmarkBlockObject>;

export type BookmarkBlock = ComponentType<BookmarkBlockProps>;
