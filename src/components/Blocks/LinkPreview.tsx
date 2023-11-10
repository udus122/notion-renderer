import type { LinkPreviewBlock } from "../../types/notion/blocks/linkPreview.js";

export const LinkPreview: LinkPreviewBlock = ({ block }) => {
  return (
    <a
      id={block.id}
      className="notion-block notion-link-preview"
      href={block.link_preview.url}
    >
      <div className="notion-link-preview-container">
        <div className="notion-link-preview-content">
          <div className="notion-link-preview-title">
            {block.link_preview?.site_meta?.title
              ? block.link_preview.site_meta.title
              : block.link_preview.url}
          </div>
          <div className="notion-link-preview-description">
            {block.link_preview?.site_meta?.description
              ? block.link_preview.site_meta.description
              : block.link_preview.url}
          </div>
          <div className="notion-link-preview-url">
            <span className="notion-link-preview-favicon">
              <img
                src={
                  block.link_preview?.site_meta?.favicon
                    ? block.link_preview.site_meta?.favicon
                    : `https://www.google.com/s2/favicons?domain=${block.link_preview.url}`
                }
                alt="link preview favicon"
              />
            </span>
            <span className="notion-link-preview-link-url">
              {block.link_preview.url}
            </span>
          </div>
        </div>
        {block.link_preview?.site_meta?.image && (
          <div className="notion-link-preview-cover">
            <img
              src={block.link_preview.site_meta.image}
              alt="link preview og image"
            />
          </div>
        )}
      </div>
    </a>
  );
};
