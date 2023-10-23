import { useMapper } from "../mapper.js";

import type { BlockProps, LinkPreviewBlockObject } from "@udus/notion-libs";

type Props = BlockProps<LinkPreviewBlockObject>;

export const LinkPreview: React.FC<Props> = ({ block }) => {
  const { Link } = useMapper();

  return (
    <div className="notion_link_preview">
      <Link href={block.link_preview.url}>
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
      </Link>
    </div>
  );
};
