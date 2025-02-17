import { Icon } from "../Common/Icon";
import { useMapper } from "../hooks";

import type { ChildPageBlock } from "@udus/notion-types";

export const ChildPage: ChildPageBlock = ({ block }) => {
  const { Link } = useMapper();
  return (
    <div id={block.id} className="notion-block notion-child-page">
      <Link prefix="/" link={block.id}>
        <span className="notion-child-page-icon">
          {<Icon icon={block.child_page.page?.icon ?? null} />}
        </span>
        <span className="notion-child-page-title">
          {block.child_page.title || "Unknown page"}
        </span>
      </Link>
    </div>
  );
};
