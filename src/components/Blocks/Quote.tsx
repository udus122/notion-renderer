import { clsx } from "clsx";

import { generateBlockColorClass } from "@/libs";

import { RichTexts } from "../RichTexts";

import Blocks from ".";

import type { BlockComponentProps } from "@/types";
import type { QuoteBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ListBlockChildrenResponseEx } from "notionate";

type Props = BlockComponentProps<
  QuoteBlockObjectResponse & {
    children?: ListBlockChildrenResponseEx;
  }
>;

const Quote: React.FC<Props> = ({ block }) => {
  const blockColor = generateBlockColorClass(block.quote.color);
  return (
    <blockquote
      id={block.id}
      className={clsx("notion_block", "notion_quote", blockColor)}
    >
      <RichTexts richText={block.quote.rich_text} />
      {block?.children && (
        <div className={"notion_quote_children"}>
          <Blocks blocks={block.children} />{" "}
        </div>
      )}
    </blockquote>
  );
};

export default Quote;
