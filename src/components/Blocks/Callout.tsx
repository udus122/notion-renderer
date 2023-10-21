import { RichText } from "../RichText/RichText.js";

import { Blocks } from "./Blocks.js";
import { Icon } from "./Icon.js";

import type { BlockObject } from "../index.js";
import type { CalloutBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockProps } from "src/types/utils.js";

export type CalloutBlockObject = CalloutBlockObjectResponse & {
  callout: { children?: Array<BlockObject> };
};

type Props = BlockProps<CalloutBlockObject>;

export const Callout: React.FC<Props> = ({ block }) => {
  return (
    <div
      id={block.id}
      className={`notion_callout notion_color_${block.callout.color}`}
    >
      <span className="notion_callout_icon">
        <Icon icon={block.callout.icon} />
      </span>
      <div className="notion_callout_content">
        <span>
          <RichText richTextItems={block.callout.rich_text} />
        </span>
        {block.callout.children && <Blocks blocks={block.callout.children} />}
      </div>
    </div>
  );
};
