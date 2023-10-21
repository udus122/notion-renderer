import { RichTexts } from "../RichTexts/index.js";

import type { ArticleData } from "@extractus/article-extractor";
import type { BookmarkBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockProps } from "src/types/utils.js";

export type BookmarkBlockObject = BookmarkBlockObjectResponse & {
  bookmark: {
    site_meta?: ArticleData;
  };
};

type Props = BlockProps<BookmarkBlockObject>;

export const Bookmark: React.FC<Props> = ({
  block,
  richTextItemMapper,
  annotationMapper,
  LinkComponent,
}) => {
  return (
    <div className="notion_bookmark">
      <LinkComponent href={block.bookmark.url}>
        <div className="notion_bookmark_container">
          <div className="notion_bookmark_content">
            <div className="notion_bookmark_title">
              {block.bookmark?.site_meta?.title
                ? block.bookmark.site_meta.title
                : block.bookmark.url}
            </div>
            <div className="notion_bookmark_description">
              {block.bookmark?.site_meta?.description
                ? block.bookmark.site_meta.description
                : block.bookmark.url}
            </div>
            <div className="notion_bookmark_url">
              <span className="notion_bookmark_favicon">
                <img
                  src={
                    block.bookmark?.site_meta?.favicon
                      ? block.bookmark.site_meta?.favicon
                      : `https://www.google.com/s2/favicons?domain=${block.bookmark.url}`
                  }
                  alt="bookmark favicon"
                />
              </span>
              <span className="notion_bookmark_link_url">
                {block.bookmark.url}
              </span>
            </div>
          </div>
          {block.bookmark?.site_meta?.image && (
            <div className="notion_bookmark_cover">
              <img
                src={block.bookmark.site_meta.image}
                alt="bookmark og image"
              />
            </div>
          )}
        </div>
      </LinkComponent>
      <div className="notion_caption notion_bookmark_caption">
        <RichTexts
          richTextItems={block.bookmark.caption}
          richTextItemMapper={richTextItemMapper}
          annotationMapper={annotationMapper}
          LinkComponent={LinkComponent}
        />
      </div>
    </div>
  );
};
