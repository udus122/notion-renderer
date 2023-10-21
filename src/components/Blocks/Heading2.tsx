import { RichTexts } from "../RichTexts/index.js";

import { Blocks } from "./Blocks.js";

import type { BlockObject } from "./Block.js";
import type { Heading2BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockComponentProps } from "src/types/utils.js";

export type Heading2BlockObject = Heading2BlockObjectResponse & {
  heading_2: { children?: Array<BlockObject> };
};

type Props = BlockComponentProps<Heading2BlockObject>;

export const Heading2: React.FC<Props> = ({ block, mapper }) => {
  return (
    <>
      {block.heading_2.is_toggleable ? (
        <details
          id={block.id}
          className={`notion_heading notion_heading_2 notion_toggle notion_color_${block.heading_2.color}`}
        >
          <summary className="notion_toggle_summary">
            <h2>
              <RichTexts richTexts={block.heading_2.rich_text} />
            </h2>
          </summary>
          <div className="notion_toggle_details">
            {block.heading_2.children && (
              <Blocks blocks={block.heading_2.children} mapper={mapper} />
            )}
          </div>
        </details>
      ) : (
        <h1
          id={block.id}
          className={`notion_heading notion_heading_2 notion_color_${block.heading_2.color}`}
        >
          <RichTexts richTexts={block.heading_2.rich_text} />
        </h1>
      )}
    </>
  );
};
