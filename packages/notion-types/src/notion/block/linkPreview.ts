import type { BlockBlockProps } from "./block";
import type { ArticleData } from "@extractus/article-extractor";
import type { LinkPreviewBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type LinkPreviewBlockObject = LinkPreviewBlockObjectResponse & {
  link_preview: {
    site_meta?: ArticleData;
  };
};

export type LinkPreviewBlockProps = BlockBlockProps<LinkPreviewBlockObject>;

export type LinkPreviewBlock = ComponentType<LinkPreviewBlockProps>;
