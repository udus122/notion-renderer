import RichTexts from "../RichTexts/RichTexts";

import Blocks from "./Blocks";

import type {
  BlockComponentProps,
  Heading3ComponentBlockObject,
} from "@/types";

type Props = BlockComponentProps<Heading3ComponentBlockObject>;

const Heading2: React.FC<Props> = ({ block }) => {
  return (
    <>
      {block.heading_3.is_toggleable ? (
        <details
          id={block.id}
          className={`notion_block notion_heading notion_heading_3 notion_toggle notion_color_${block.heading_3.color}`}
        >
          <summary className="notion_toggle_summary">
            <h3>
              <RichTexts richTexts={block.heading_3.rich_text} />
            </h3>
          </summary>
          <div className="notion_toggle_details">
            {block.children && <Blocks blocks={block.children} />}
          </div>
        </details>
      ) : (
        <h1
          id={block.id}
          className={`notion_block notion_heading notion_heading_3 notion_color_${block.heading_3.color}`}
        >
          <RichTexts richTexts={block.heading_3.rich_text} />
        </h1>
      )}
    </>
  );
};

export default Heading2;
