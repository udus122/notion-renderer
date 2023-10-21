import { Icon } from "./Icon.js";

import type {
  ChildPageBlockObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockProps } from "src/types/utils.js";

export type ChildPageBlockObject = ChildPageBlockObjectResponse & {
  child_page: {
    page?: PageObjectResponse;
  };
};

type Props = BlockProps<ChildPageBlockObject>;

export const ChildPage: React.FC<Props> = ({ block, LinkComponent }) => {
  return (
    <div id={block.id} className="notion_child_page">
      <LinkComponent href={`/${block.id}`}>
        <span className="notion_child_page_icon">
          {<Icon icon={block.child_page.page?.icon ?? null} />}
        </span>
        <span className="notion_child_page_title">
          {block.child_page.title || "Unknown page"}
        </span>
      </LinkComponent>
    </div>
  );
};
