import { extractTitleProperty } from "../../libs/notion/util.js";
import { RichText } from "../RichText/RichText.js";

import { useMapper } from "./mapper.js";
import { Icon } from "./Icon.js";

import type {
  LinkToPageBlockObjectResponse,
  PageObjectResponse,
  DatabaseObjectResponse,
  ListCommentsResponse,
} from "@notionhq/client/build/src/api-endpoints.js";
import type { IdRequest } from "src/types/notion.js";
import type { BlockProps } from "src/types/utils.js";

export type LinkToPageBlockObject = LinkToPageBlockObjectResponse & {
  link_to_page:
    | {
        type: "page_id";
        page_id: IdRequest;
        page?: PageObjectResponse;
      }
    | {
        type: "database_id";
        database_id: IdRequest;
        database?: DatabaseObjectResponse;
      }
    | {
        type: "comment_id";
        comment_id: IdRequest;
        comments?: ListCommentsResponse["results"];
      };
};

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
            <RichText richTextItems={titleRichText} />
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
            <RichText richTextItems={titleRichTexts} />
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
