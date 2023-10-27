import { Icon } from "../Icon.js";
import { useMapper } from "../Mapper/hooks.js";

import type { ChildPageBlock } from "../../types/notion/blocks/childPage.js";

export const ChildPage: ChildPageBlock = ({ block }) => {
  const { Link } = useMapper();
  return (
    <Link href={`/${block.id}`}>
      <div id={block.id} className="notion-child-page">
        <span className="notion-child-page-icon">
          {<Icon icon={block.child_page.page?.icon ?? null} />}
        </span>
        <span className="notion-child-page-title">
          {block.child_page.title || "Unknown page"}
        </span>
      </div>
    </Link>
  );
};
