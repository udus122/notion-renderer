import { extractTitleProperty } from "../../utils.js";
import { Icon } from "../Icon.js";
import { useMapper } from "../Mapper/hooks.js";
import { RichText } from "../RichText/RichText.js";

import type { LinkToPageBlock } from "../../types/notion/blocks/linkToPage.js";

export const LinkToPage: LinkToPageBlock = ({ block }) => {
  const { Link } = useMapper();

  if (block.link_to_page.type === "page_id" && block.link_to_page.page) {
    const titleRichText = extractTitleProperty(block.link_to_page.page);
    return (
      <div id={block.id} className="notion-link-to-page">
        <Link href={`/${block.id}`}>
          <span className="notion-link-to-page-icon">
            {<Icon icon={block.link_to_page.page?.icon ?? null} />}
          </span>
          <span className="notion-link-to-page-title">
            <RichText richText={titleRichText} />
          </span>
        </Link>
      </div>
    );
  }
  if (
    block.link_to_page.type === "database_id" &&
    block.link_to_page.database
  ) {
    const titleRichTexts = extractTitleProperty(block.link_to_page.database);
    return (
      <div id={block.id} className="notion-link-to-page">
        <Link href={`/${block.id}`}>
          <span className="notion-link-to-page-icon">
            {<Icon icon={block.link_to_page.database?.icon ?? null} />}
          </span>
          <span className="notion-link-to-page-title">
            <RichText richText={titleRichTexts} />
          </span>
        </Link>
      </div>
    );
  }
  if (block.link_to_page.type === "comment_id" && block.link_to_page.comments) {
    console.warn("comment type link_to_page block is not supported yet.");
  }

  return null;
};
