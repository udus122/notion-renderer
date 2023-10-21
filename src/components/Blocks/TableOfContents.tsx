import { RichTexts } from "../RichTexts/index.js";

import type {
  Heading1BlockObject,
  Heading2BlockObject,
  Heading3BlockObject,
  TableOfContentsBlockObject,
} from "../../types/components.js";
import type { BlockComponentProps } from "src/types/utils.js";

type Props = BlockComponentProps<TableOfContentsBlockObject>;

export const TableOfContents: React.FC<Props> = ({ block, blocks }) => {
  const headings = blocks?.filter(
    (
      block
    ): block is
      | Heading1BlockObject
      | Heading2BlockObject
      | Heading3BlockObject =>
      block.type === "heading_1" ||
      block.type === "heading_2" ||
      block.type === "heading_3"
  );
  return (
    <div
      id={block.id}
      className={`notion_table_of_contents notion_color_${block.table_of_contents.color}`}
    >
      {headings &&
        headings.map((heading) => {
          return (
            <div key={heading.id} className="notion_table_of_contents_item">
              <div className={`notion_table_of_contents_item_${heading.type}`}>
                <a href={`#${heading.id}`}>
                  {/* @ts-expect-error: because heading objects always have a 'rich_text' property  */}
                  <RichTexts richTexts={heading[heading.type].rich_text} />
                </a>
              </div>
            </div>
          );
        })}
    </div>
  );
};
