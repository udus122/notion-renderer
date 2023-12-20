import { RichText } from "../RichText/RichText.js";

import type { BookmarkBlock } from "../../types/notion/block/bookmark.js";

export const Bookmark: BookmarkBlock = ({ block }) => {
  return (
    <div id={block.id} className="notion-block notion-bookmark">
      <a href={block.bookmark.url} target="_blank">
        <div className="notion-bookmark-container">
          <div className="notion-bookmark-content">
            <div className="notion-bookmark-title">
              {block.bookmark?.site_meta?.title
                ? block.bookmark.site_meta.title
                : block.bookmark.url}
            </div>
            <div className="notion-bookmark-description">
              {block.bookmark?.site_meta?.description
                ? block.bookmark.site_meta.description
                : block.bookmark.url}
            </div>
            <div className="notion-bookmark-url">
              <span className="notion-bookmark-favicon">
                <img
                  src={
                    block.bookmark?.site_meta?.favicon
                      ? block.bookmark.site_meta?.favicon
                      : `https://www.google.com/s2/favicons?domain=${block.bookmark.url}`
                  }
                  alt="bookmark favicon"
                />
              </span>
              <span className="notion-bookmark-link-url">
                {block.bookmark.url}
              </span>
            </div>
          </div>
          {block.bookmark?.site_meta?.image && (
            <div className="notion-bookmark-cover">
              <img
                src={block.bookmark.site_meta.image}
                alt="bookmark og image"
              />
            </div>
          )}
        </div>
      </a>
      <div className="notion-caption notion-bookmark-caption">
        <RichText richText={block.bookmark.caption} />
      </div>
    </div>
  );
};
