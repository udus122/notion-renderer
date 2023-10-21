import { RichTexts } from "../RichTexts/index.js";

import type { Heading1BlockObject } from "./Heading1.js";
import type { Heading2BlockObject } from "./Heading2.js";
import type { Heading3BlockObject } from "./Heading3.js";
import type { TableOfContentsBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockProps } from "src/types/utils.js";

export type TableOfContentsBlockObject = TableOfContentsBlockObjectResponse;

type Props = BlockProps<TableOfContentsBlockObject>;

export const TableOfContents: React.FC<Props> = ({
  block,
  blocks,
  LinkComponent,
}) => {
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
                <LinkComponent href={`#${heading.id}`}>
                  {/* @ts-expect-error: because heading objects always have a 'rich_text' property  */}
                  <RichTexts richTextItems={heading[heading.type].rich_text} />
                </LinkComponent>
              </div>
            </div>
          );
        })}
    </div>
  );
};
