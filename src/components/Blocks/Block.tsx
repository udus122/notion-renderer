import Divider from "./Divider";
import Heading1 from "./Heading1";
import Heading2 from "./Heading2";
import Heading3 from "./Heading3";
import Paragraph from "./Paragraph";
import Quote from "./Quote";
import ToDo from "./ToDo";

import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

type Props = {
  block: BlockObjectResponse;
};

const Block: React.FC<Props> = ({ block }) => {
  if (!("type" in block)) return null;

  switch (block.type) {
    case "heading_1":
      return <Heading1 block={block} />;
    case "heading_2":
      return <Heading2 block={block} />;
    case "heading_3":
      return <Heading3 block={block} />;
    case "paragraph":
      return <Paragraph block={block} />;
    case "quote":
      return <Quote block={block} />;
    case "to_do":
      return <ToDo block={block} />;
    case "divider":
      return <Divider block={block} />;
    default:
      console.warn(`${block.type} is not supported`);
      return null;
  }
};

export default Block;
