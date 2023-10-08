import RichTexts from "../RichTexts/RichTexts";

import type {
  BlockComponentProps,
  BookmarkBlockObjectComponent,
} from "@/types/components";

type Props = BlockComponentProps<BookmarkBlockObjectComponent>;

const Bookmark: React.FC<Props> = ({ block }) => {
  return (
    <div className="notion_bookmark">
      <div className="notion_bookmark_content">
        <a href={block.bookmark.url} target="_blank" rel="noopener noreferrer">
          <div className="notion_bookmark_title">{block.bookmark.url}</div>
          <div className="notion_bookmark_description">
            {block.bookmark.url}
          </div>
          <div className="notion_bookmark_url">
            <span className="notion_bookmark_favicon">
              <img
                src={`https://www.google.com/s2/favicons?domain=${block.bookmark.url}`}
              />
            </span>
            <span className="notion_bookmark_link_url">
              {block.bookmark.url}
            </span>
          </div>
        </a>
      </div>
      <div className="notion_caption notion_bookmark_caption">
        <RichTexts richTexts={block.bookmark.caption} />
      </div>
    </div>
  );
};

export default Bookmark;
