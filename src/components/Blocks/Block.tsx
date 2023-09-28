import Divider from "./Divider";
import Heading1 from "./Heading1";
import Heading2 from "./Heading2";
import Paragraph from "./Paragraph";
import Quote from "./Quote";

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
    case "paragraph":
      return <Paragraph block={block} />;
    case "quote":
      return <Quote block={block} />;
    case "divider":
      return <Divider block={block} />;
    default:
      console.warn(`${block.type} is not supported`);
      return null;
  }
};

export default Block;
