import Divider from "./Divider";
import Paragraph from "./Paragraph";
import Quote from "./Quote";

import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

type Props = {
  block: BlockObjectResponse;
};

const Block: React.FC<Props> = ({ block }) => {
  if (!("type" in block)) return null;

  switch (block.type) {
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
