import type {
  BlockComponentProps,
  LinkPreviewBlockObjectComponent,
} from "../../types/components.js";

type Props = BlockComponentProps<LinkPreviewBlockObjectComponent>;

export const LinkPreview: React.FC<Props> = ({ block }) => {
  return (
    <div className="notion_link_preview">
      <a
        href={block.link_preview.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="notion_link_preview_container">
          <div className="notion_link_preview_content">
            <div className="notion_link_preview_title">
              {block.link_preview?.article_data?.title
                ? block.link_preview.article_data.title
                : block.link_preview.url}
            </div>
            <div className="notion_link_preview_description">
              {block.link_preview?.article_data?.description
                ? block.link_preview.article_data.description
                : block.link_preview.url}
            </div>
            <div className="notion_link_preview_url">
              <span className="notion_link_preview_favicon">
                <img
                  src={
                    block.link_preview?.article_data?.favicon
                      ? block.link_preview.article_data?.favicon
                      : `https://www.google.com/s2/favicons?domain=${block.link_preview.url}`
                  }
                  alt="link preview favicon"
                />
              </span>
              <span className="notion_link_preview_link_url">
                {block.link_preview.url}
              </span>
            </div>
          </div>
          {block.link_preview?.article_data?.image && (
            <div className="notion_link_preview_cover">
              <img
                src={block.link_preview.article_data.image}
                alt="link preview og image"
              />
            </div>
          )}
        </div>
      </a>
    </div>
  );
};
