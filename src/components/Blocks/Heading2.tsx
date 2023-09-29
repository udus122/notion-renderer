import RichTexts from "../RichTexts";

import Blocks from "./Blocks";

import type {
  BlockComponentProps,
  Heading2BlockObjectResponseWithChildren,
} from "@/types";

type Props = BlockComponentProps<Heading2BlockObjectResponseWithChildren>;

const Heading2: React.FC<Props> = ({ block }) => {
  return (
    <>
      {block.heading_2.is_toggleable ? (
        <details
          id={block.id}
          className={`notion_block notion_heading notion_heading_2 notion_toggle notion_color_${block.heading_2.color}`}
        >
          <summary className="notion_toggle_summary">
            <h2>
              <RichTexts richText={block.heading_2.rich_text} />
            </h2>
          </summary>
          <div className="notion_toggle_details">
            {block.children && <Blocks blocks={block.children} />}
          </div>
        </details>
      ) : (
        <h1
          id={block.id}
          className={`notion_block notion_heading notion_heading_2 notion_color_${block.heading_2.color}`}
        >
          <RichTexts richText={block.heading_2.rich_text} />
        </h1>
      )}
    </>
  );
};

export default Heading2;
