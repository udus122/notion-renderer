import RichTexts from "../RichTexts";

import type {
  BlockComponentProps,
  Heading3BlockObjectResponseWithChildren,
} from "@/types";

type Props = BlockComponentProps<Heading3BlockObjectResponseWithChildren>;

const Heading2: React.FC<Props> = ({ block }) => {
  return (
    <h3
      id={block.id}
      className={`notion_block notion_heading notion_heading_1 notion_color_$${block.heading_3.color}`}
    >
      <RichTexts richText={block.heading_3.rich_text} />
    </h3>
  );
};

export default Heading2;
