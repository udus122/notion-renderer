import RichTexts from "../RichTexts";

import Blocks from "./Blocks";

import type {
  BlockComponentProps,
  Heading1BlockObjectResponseWithChildren,
} from "@/types";

type Props = BlockComponentProps<Heading1BlockObjectResponseWithChildren>;

const Heading1: React.FC<Props> = ({ block }) => {
  return (
    <h1
      id={block.id}
      className={`notion_block notion_heading notion_heading_1 notion_color_${block.heading_1.color}`}
    >
      <RichTexts richText={block.heading_1.rich_text} />
    </h1>
  );
};

export default Heading1;
