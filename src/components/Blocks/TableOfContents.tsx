import RichTexts from "../RichTexts/RichTexts";

import type {
  BlockComponentProps,
  Heading1ComponentBlockObject,
  Heading2ComponentBlockObject,
  Heading3ComponentBlockObject,
  TableOfContentsComponentBlockObject,
} from "@/types";

type Props = BlockComponentProps<TableOfContentsComponentBlockObject>;

const TableOfContents: React.FC<Props> = ({ block, blocks }) => {
  const headings = blocks?.results.filter(
    (
      block
    ): block is
      | Heading1ComponentBlockObject
      | Heading2ComponentBlockObject
      | Heading3ComponentBlockObject =>
      block.type === "heading_1" ||
      block.type === "heading_2" ||
      block.type === "heading_3"
  );
  return (
    <div
      id={block.id}
      className={`notion_block notion_table_of_contents notion_color_${block.table_of_contents.color}`}
    >
      {headings &&
        headings.map((heading) => {
          return (
            <div className="notion_table_of_contents_item">
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

export default TableOfContents;
