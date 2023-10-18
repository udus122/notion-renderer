import { RichTexts } from "../RichTexts/RichTexts.js";

import type {
  BlockComponentProps,
  BookmarkBlockObjectComponent,
} from "@/types/components.js";

type Props = BlockComponentProps<BookmarkBlockObjectComponent>;

export const Bookmark: React.FC<Props> = ({ block }) => {
  return (
    <div className="notion_bookmark">
      <a href={block.bookmark.url} target="_blank" rel="noopener noreferrer">
        <div className="notion_bookmark_container">
          <div className="notion_bookmark_content">
            <div className="notion_bookmark_title">
              {block.bookmark?.site_info?.title
                ? block.bookmark.site_info.title
                : block.bookmark.url}
            </div>
            <div className="notion_bookmark_description">
              {block.bookmark?.site_info?.description
                ? block.bookmark.site_info.description
                : block.bookmark.url}
            </div>
            <div className="notion_bookmark_url">
              <span className="notion_bookmark_favicon">
                <img
                  src={
                    block.bookmark?.site_info?.icon
                      ? block.bookmark.site_info?.icon
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
          {block.bookmark?.site_info?.image && (
            <div className="notion_bookmark_cover">
              <img
                src={block.bookmark.site_info.image.url}
                width={block.bookmark.site_info.image.width}
                height={block.bookmark.site_info.image.height}
                alt="bookmark og image"
              />
            </div>
          )}
        </div>
      </a>
      <div className="notion_caption notion_bookmark_caption">
        <RichTexts richTexts={block.bookmark.caption} />
      </div>
    </div>
  );
};
