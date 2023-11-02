import { Icon } from "../Common/Icon.js";
import { useMapper } from "../Mapper/hooks.js";

import type { ChildPageBlock } from "../../types/notion/blocks/childPage.js";

export const ChildPage: ChildPageBlock = ({ block }) => {
  const { Link } = useMapper();
  return (
    <Link
      id={block.id}
      className="notion-block notion-child-page"
      href={`/${block.id}`}
    >
      <span className="notion-child-page-icon">
        {<Icon icon={block.child_page.page?.icon ?? null} />}
      </span>
      <span className="notion-child-page-title">
        {block.child_page.title || "Unknown page"}
      </span>
    </Link>
  );
};
