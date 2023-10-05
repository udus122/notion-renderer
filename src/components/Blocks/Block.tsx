import { isFullBlock } from "@notionhq/client";

import { BlockComponentProps, ComponentBlockObject } from "@/types";

import BulletedList from "./BulletedList";
import BulletedListItem from "./BulletedListItem";
import Callout from "./Callout";
import Code from "./Code";
import ColumnList from "./ColumnList";
import Divider from "./Divider";
import Equation from "./Equation";
import Heading1 from "./Heading1";
import Heading2 from "./Heading2";
import Heading3 from "./Heading3";
import Image from "./Image";
import NumberedList from "./NumberedList";
import NumberedListItem from "./NumberedListItem";
import Paragraph from "./Paragraph";
import Quote from "./Quote";
import Table from "./Table";
import TableOfContents from "./TableOfContents";
import ToDo from "./ToDo";
import Toggle from "./Toggle";

type Props = BlockComponentProps<ComponentBlockObject>;

const Block: React.FC<Props> = ({ block, blocks }) => {
  if (!isFullBlock(block)) return null;

  switch (block.type) {
    case "audio":
      console.warn(`${block.type} is not supported`);
      return null;
    case "bookmark":
      console.warn(`${block.type} is not supported`);
      return null;
    case "breadcrumb":
      console.warn(`${block.type} is not supported`);
      return null;
    case "bulleted_list_item":
      console.warn(`${block.type} is not supported`);
      return null;
    case "callout":
      return <Callout block={block} />;
    case "child_database":
      console.warn(`${block.type} is not supported`);
      return null;
    case "child_page":
      console.warn(`${block.type} is not supported`);
      return null;
    case "code":
      return <Code block={block} />;
    case "column":
      console.warn(
        `top level column block is not supported. column block must be child of column_list block.`
      );
      return null;
    case "column_list":
      return <ColumnList block={block} />;
    case "divider":
      return <Divider block={block} />;
    case "embed":
      console.warn(`${block.type} is not supported`);
      return null;
    case "equation":
      return <Equation block={block} />;
    case "file":
      console.warn(`${block.type} is not supported`);
      return null;
    case "heading_1":
      return <Heading1 block={block} />;
    case "heading_2":
      return <Heading2 block={block} />;
    case "heading_3":
      return <Heading3 block={block} />;
    case "image":
      return <Image block={block} />;
    case "link_preview":
      console.warn(`${block.type} is not supported`);
      return null;
    case "link_to_page":
      console.warn(`${block.type} is not supported`);
      return null;
    case "numbered_list_item":
      console.warn(`${block.type} is not supported`);
      return null;
    case "paragraph":
      return <Paragraph block={block} />;
    case "pdf":
      console.warn(`${block.type} is not supported`);
      return null;
    case "quote":
      return <Quote block={block} />;
    case "synced_block":
      console.warn(`${block.type} is not supported`);
      return null;
    case "table":
      return <Table block={block} />;
    case "table_of_contents":
      return <TableOfContents block={block} blocks={blocks} />;
    case "table_row":
      console.warn(
        `top level table_row block is not supported. table_row block must be child of table block.`
      );
      return null;
    case "template":
      console.warn(`${block.type} is not supported`);
      return null;
    case "to_do":
      return <ToDo block={block} />;
    case "toggle":
      return <Toggle block={block} />;
    case "unsupported":
      console.warn(`${block.type} is not supported`);
      return null;
    case "video":
      console.warn(`${block.type} is not supported`);
      return null;
    default:
      // @ts-expect-error: to log when an unexpected 'block.type' is encountered, which is not in the type.
      console.warn(`${block.type} is unknown type.`);
      return null;
  }
};

export default Block;
