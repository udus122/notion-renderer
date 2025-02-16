import { RichText } from "../RichText/RichText.js";

import { BlockList } from "./BlockList.js";

import type { Heading1Block } from "../../types/notion/block/heading1.js";

export const Heading1: Heading1Block = ({ block }) => {
  return (
    <>
      {block.heading_1.is_toggleable ? (
        <details
          id={block.id}
          className={`notion-block notion-heading notion-heading-1 notion-toggle notion-color-${block.heading_1.color}`}
        >
          <summary className="notion-toggle-summary">
            <h1>
              <RichText richText={block.heading_1.rich_text} />
            </h1>
          </summary>
          <div className="notion-toggle-details">
            {block.heading_1.children && (
              <BlockList blocks={block.heading_1.children} />
            )}
          </div>
        </details>
      ) : (
        <h1
          id={block.id}
          className={`notion-block notion-heading notion-heading-1 notion-color-${block.heading_1.color}`}
        >
          <RichText richText={block.heading_1.rich_text} />
        </h1>
      )}
    </>
  );
};
