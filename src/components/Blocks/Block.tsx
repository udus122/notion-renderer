import { isFullBlock } from "@notionhq/client";

import Callout from "./Callout";
import Divider from "./Divider";
import Heading1 from "./Heading1";
import Heading2 from "./Heading2";
import Heading3 from "./Heading3";
import Image from "./Image";
import Paragraph from "./Paragraph";
import Quote from "./Quote";
import ToDo from "./ToDo";
import Toggle from "./Toggle";

import type {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

type Props = {
  block: BlockObjectResponse | PartialBlockObjectResponse;
};

const Block: React.FC<Props> = ({ block }) => {
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
      console.warn(`${block.type} is not supported`);
      return null;
    case "column":
      console.warn(`${block.type} is not supported`);
      return null;
    case "column_list":
      console.warn(`${block.type} is not supported`);
      return null;
    case "divider":
      return <Divider block={block} />;
    case "embed":
      console.warn(`${block.type} is not supported`);
      return null;
    case "equation":
      console.warn(`${block.type} is not supported`);
      return null;
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
      console.warn(`${block.type} is not supported`);
      return null;
    case "table_of_contents":
      console.warn(`${block.type} is not supported`);
      return null;
    case "table_row":
      console.warn(`${block.type} is not supported`);
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
      console.warn(`${block.type} is unknown.`);
      return null;
  }
};

export default Block;
