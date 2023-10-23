import { useMapper } from "../mapper.js";
import { RichText } from "../RichText/RichText.js";

import type {
  BlockProps,
  TableOfContentsBlockObject,
  Heading3BlockObject,
  Heading2BlockObject,
  Heading1BlockObject,
} from "@udus/notion-libs";

type Props = BlockProps<TableOfContentsBlockObject>;

export const TableOfContents: React.FC<Props> = ({ block, blocks }) => {
  const { Link } = useMapper();
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
