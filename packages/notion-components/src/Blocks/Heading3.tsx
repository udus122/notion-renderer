import { RichText } from "../RichText/RichText";

import { BlockList } from "./BlockList";

import type { Heading3Block } from "@udus/notion-types";

export const Heading3: Heading3Block = ({ block }) => {
  return (
    <>
      {block.heading_3.is_toggleable ? (
        <details
          id={block.id}
          className={`notion-block notion-heading notion-heading-3 notion-toggle notion-color-${block.heading_3.color}`}
        >
          <summary className="notion-toggle-summary">
            <h3>
              <RichText richText={block.heading_3.rich_text} />
            </h3>
          </summary>
          <div className="notion-toggle-details">
            {block.heading_3.children && (
              <BlockList blocks={block.heading_3.children} />
            )}
          </div>
        </details>
      ) : (
        <h3
          id={block.id}
          className={`notion-block notion-heading notion-heading-3 notion-color-${block.heading_3.color}`}
        >
          <RichText richText={block.heading_3.rich_text} />
        </h3>
      )}
    </>
  );
};
