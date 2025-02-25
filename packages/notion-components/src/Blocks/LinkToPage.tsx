import { extractTitle } from "@udus/notion-utils";
import { Icon } from "../Common/Icon";
import { useMapper } from "../hooks";
import { RichText } from "../RichText/RichText";

import type { LinkToPageBlock } from "@udus/notion-types";

export const LinkToPage: LinkToPageBlock = ({ block }) => {
  const { Link } = useMapper();

  if (block.link_to_page.type === "comment_id" && block.link_to_page.comments) {
    console.warn("comment type link_to_page block is not supported yet.");
  }

  const icon =
    block.link_to_page.type === "page_id" && block.link_to_page.page
      ? block.link_to_page.page.icon
      : block.link_to_page.type === "database_id" && block.link_to_page.database
        ? block.link_to_page.database.icon
        : null;

  const titleRichText =
    block.link_to_page.type === "page_id" && block.link_to_page.page
      ? extractTitle(block.link_to_page.page)
      : block.link_to_page.type === "database_id" && block.link_to_page.database
        ? extractTitle(block.link_to_page.database)
        : [];

  return (
    <div id={block.id} className="notion-block notion-link-to-page">
      <Link prefix="/" link={block.id}>
        <span className="notion-link-to-page-icon">
          <Icon icon={icon} />
        </span>
        <span className="notion-link-to-page-title">
          <RichText richText={titleRichText} />
        </span>
      </Link>
    </div>
  );
};
