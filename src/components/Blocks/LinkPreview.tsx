import type { ArticleData } from "@extractus/article-extractor";
import type { LinkPreviewBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockProps } from "src/types/utils.js";

export type LinkPreviewBlockObject = LinkPreviewBlockObjectResponse & {
  link_preview: {
    site_meta?: ArticleData;
  };
};

type Props = BlockProps<LinkPreviewBlockObject>;

export const LinkPreview: React.FC<Props> = ({ block, LinkComponent }) => {
  return (
    <div className="notion_link_preview">
      <LinkComponent href={block.link_preview.url}>
        <div className="notion_link_preview_container">
          <div className="notion_link_preview_content">
            <div className="notion_link_preview_title">
              {block.link_preview?.site_meta?.title
                ? block.link_preview.site_meta.title
                : block.link_preview.url}
            </div>
            <div className="notion_link_preview_description">
              {block.link_preview?.site_meta?.description
                ? block.link_preview.site_meta.description
                : block.link_preview.url}
            </div>
            <div className="notion_link_preview_url">
              <span className="notion_link_preview_favicon">
                <img
                  src={
                    block.link_preview?.site_meta?.favicon
                      ? block.link_preview.site_meta?.favicon
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
          {block.link_preview?.site_meta?.image && (
            <div className="notion_link_preview_cover">
              <img
                src={block.link_preview.site_meta.image}
                alt="link preview og image"
              />
            </div>
          )}
        </div>
      </LinkComponent>
    </div>
  );
};
