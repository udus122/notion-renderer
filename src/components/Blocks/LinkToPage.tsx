import { extractTitleProperty } from "../../libs/notion/util.js";
import { RichTexts } from "../RichTexts/index.js";

import { Icon } from "./Icon.js";

import type { LinkToPageBlockObject } from "../../types/components.js";
import type { BlockComponentProps } from "src/types/utils.js";

type Props = BlockComponentProps<LinkToPageBlockObject>;

export const LinkToPage: React.FC<Props> = ({ block }) => {
  if (block.link_to_page.type === "page_id" && block.link_to_page.page) {
    const titleRichText = extractTitleProperty(block.link_to_page.page);
    return (
      <a className="notion_link" href={`/${block.id}`}>
        <div id={block.id} className="notion_link_to_page">
          <span className="notion_link_to_page_icon">
            {<Icon icon={block.link_to_page.page?.icon ?? null} />}
          </span>
          <span className="notion_link_to_page_title">
            <RichTexts richTexts={titleRichText} />
          </span>
        </div>
      </a>
    );
  }
  if (
    block.link_to_page.type === "database_id" &&
    block.link_to_page.database
  ) {
    const titleRichTexts = extractTitleProperty(block.link_to_page.database);
    return (
      <a href={`/${block.id}`}>
        <div id={block.id} className="notion_link_to_page">
          <span className="notion_link_to_page_icon">
            {<Icon icon={block.link_to_page.database?.icon ?? null} />}
          </span>
          <span className="notion_link_to_page_title">
            <RichTexts richTexts={titleRichTexts} />
          </span>
        </div>
      </a>
    );
  }
  if (block.link_to_page.type === "comment_id" && block.link_to_page.comments) {
    console.warn("comment type link_to_page block is not supported yet.");
  }

  return null;
};
