import { Icon } from "./Icon.js";

import type { ChildPageBlockObject } from "../../types/components.js";
import type { BlockComponentProps } from "src/types/utils.js";

type Props = BlockComponentProps<ChildPageBlockObject>;

export const ChildPage: React.FC<Props> = ({ block }) => {
  return (
    <a className="notion_link" href={`/${block.id}`}>
      <div id={block.id} className="notion_child_page">
        <span className="notion_child_page_icon">
          {<Icon icon={block.child_page.page?.icon ?? null} />}
        </span>
        <span className="notion_child_page_title">
          {block.child_page.title || "Unknown page"}
        </span>
      </div>
    </a>
  );
};
