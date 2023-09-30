import RichTexts from "../RichTexts/RichTexts";

import Blocks from "./Blocks";

import type {
  BlockComponentProps,
  Heading1BlockObjectResponseWithChildren,
} from "@/types";

type Props = BlockComponentProps<Heading1BlockObjectResponseWithChildren>;

const Heading1: React.FC<Props> = ({ block }) => {
  return (
    <>
      {block.heading_1.is_toggleable ? (
        <details
          id={block.id}
          className={`notion_block notion_heading notion_heading_1 notion_toggle notion_color_${block.heading_1.color}`}
        >
          <summary className="notion_toggle_summary">
            <h1>
              <RichTexts richTexts={block.heading_1.rich_text} />
            </h1>
          </summary>
          <div className="notion_toggle_details">
            {block.children && <Blocks blocks={block.children} />}
          </div>
        </details>
      ) : (
        <h1
          id={block.id}
          className={`notion_block notion_heading notion_heading_1 notion_color_${block.heading_1.color}`}
        >
          <RichTexts richTexts={block.heading_1.rich_text} />
        </h1>
      )}
    </>
  );
};

export default Heading1;
