import { useMapper } from "../mapper.js";

import { Icon } from "./Icon.js";

import type { BlockProps, ChildPageBlockObject } from "@udus/notion-libs";

type Props = BlockProps<ChildPageBlockObject>;

export const ChildPage: React.FC<Props> = ({ block }) => {
  const { Link } = useMapper();
  return (
    <div id={block.id} className="notion_child_page">
      <Link href={`/${block.id}`}>
        <span className="notion_child_page_icon">
          {<Icon icon={block.child_page.page?.icon ?? null} />}
        </span>
        <span className="notion_child_page_title">
          {block.child_page.title || "Unknown page"}
        </span>
      </Link>
    </div>
  );
};
