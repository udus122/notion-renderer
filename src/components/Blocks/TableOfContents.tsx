import { notNullNorUndefined } from "../../libs/utils.js";
import { useMapper } from "../Mapper/hooks.js";
import { RichText } from "../RichText/RichText.js";

import type { Heading1BlockObject } from "../../types/notion/blocks/heading1.js";
import type { Heading2BlockObject } from "../../types/notion/blocks/heading2.js";
import type { Heading3BlockObject } from "../../types/notion/blocks/heading3.js";
import type { TableOfContentsBlock } from "../../types/notion/blocks/tableOfContents.js";

export const TableOfContents: TableOfContentsBlock = ({ block, blocks }) => {
  const { Link } = useMapper();
  const headings = blocks?.filter(
    (
      block
    ): block is
      | Heading1BlockObject
      | Heading2BlockObject
      | Heading3BlockObject =>
      notNullNorUndefined(block) &&
      (block.type === "heading_1" ||
        block.type === "heading_2" ||
        block.type === "heading_3")
  );
  return (
    <div
      id={block.id}
      className={`notion-table-of-contents notion-color-${block.table_of_contents.color}`}
    >
      {headings &&
        headings.map((heading) => {
          return (
            <div key={heading.id} className="notion-table-of-contents-item">
              <div className={`notion-table-of-contents-item-${heading.type}`}>
                <Link href={`#${heading.id}`}>
                  {/* @ts-expect-error: because heading objects always have a 'rich_text' property  */}
                  <RichText richText={heading[heading.type].rich_text} />
                </Link>
              </div>
            </div>
          );
        })}
    </div>
  );
};
