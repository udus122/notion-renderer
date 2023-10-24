import { extractTitleProperty } from "../../utils.js";
import { useMapper } from "../hooks.js";
import { RichText } from "../RichText/RichText.js";

import { Icon } from "./Icon.js";

import type { BlockProps } from "./Block.js";
import type { LinkToPageBlockObject } from "@udus/notion-libs";

type Props = BlockProps<LinkToPageBlockObject>;

export const LinkToPage: React.FC<Props> = ({ block }) => {
  const { Link } = useMapper();

  if (block.link_to_page.type === "page_id" && block.link_to_page.page) {
    const titleRichText = extractTitleProperty(block.link_to_page.page);
    return (
      <div id={block.id} className="notion_link_to_page">
        <Link href={`/${block.id}`}>
          <span className="notion_link_to_page_icon">
            {<Icon icon={block.link_to_page.page?.icon ?? null} />}
          </span>
          <span className="notion_link_to_page_title">
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
      <div id={block.id} className="notion_link_to_page">
        <Link href={`/${block.id}`}>
          <span className="notion_link_to_page_icon">
            {<Icon icon={block.link_to_page.database?.icon ?? null} />}
          </span>
          <span className="notion_link_to_page_title">
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
