import type { BlockProps } from "../common.js";
import type { RichTextItem } from "../richText/richTextItem.js";
import type { ArticleData } from "@extractus/article-extractor";
import type { BookmarkBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type BookmarkBlockObject = BookmarkBlockObjectResponse & {
  bookmark: {
    site_meta?: ArticleData;
    caption: Array<RichTextItem>;
  };
};

export type BookmarkBlockProps = BlockProps<BookmarkBlockObject>;

export type BookmarkBlock = ComponentType<BookmarkBlockProps>;
