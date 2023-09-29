import { ToggleBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import { ListBlockChildrenResponseEx } from "notionate";

import RichTexts from "../RichTexts";

import Blocks from ".";

import type { BlockComponentProps } from "@/types";

type Props = BlockComponentProps<
  ToggleBlockObjectResponse & {
    children?: ListBlockChildrenResponseEx;
  }
>;

const Toggle: React.FC<Props> = ({ block }) => {
  return (
    <details
      id={block.id}
      className={`notion_block notion_toggle notion_${block.toggle.color}`}
    >
      <summary className="notion_toggle_summary">
        <RichTexts richText={block.toggle.rich_text} />
      </summary>
      <div className="notion_toggle_details">
        {block.children && <Blocks blocks={block.children} />}
      </div>
    </details>
  );
};

export default Toggle;
