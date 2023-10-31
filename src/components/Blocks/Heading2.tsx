import { RichText } from "../RichText/RichText.js";

import { BlockList } from "./BlockList.js";

import type { Heading2Block } from "../../types/notion/blocks/heading2.js";

export const Heading2: Heading2Block = ({ block }) => {
  return (
    <>
      {block.heading_2.is_toggleable ? (
        <details
          id={block.id}
          className={`notion-block notion-heading notion-heading-2 notion-toggle notion-color-${block.heading_2.color}`}
        >
          <summary className="notion-toggle-summary">
            <h2>
              <RichText richText={block.heading_2.rich_text} />
            </h2>
          </summary>
          <div className="notion-toggle-details">
            {block.heading_2.children && (
              <BlockList blocks={block.heading_2.children} />
            )}
          </div>
        </details>
      ) : (
        <h1
          id={block.id}
          className={`notion-block notion-heading notion-heading-2 notion-color-${block.heading_2.color}`}
        >
          <RichText richText={block.heading_2.rich_text} />
        </h1>
      )}
    </>
  );
};
