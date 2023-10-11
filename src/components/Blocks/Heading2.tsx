import RichTexts from "../RichTexts/RichTexts";

import Blocks from "./Blocks";

import type {
  BlockComponentProps,
  Heading2BlockObjectComponent,
} from "@/types/components";

type Props = BlockComponentProps<Heading2BlockObjectComponent>;

const Heading2: React.FC<Props> = ({ block }) => {
  return (
    <>
      {block.heading_2.is_toggleable ? (
        <details
          id={block.id}
          className={`notion_heading notion_heading_2 notion_toggle notion_color_${block.heading_2.color}`}
        >
          <summary className="notion_toggle_summary">
            <h2>
              <RichTexts richTexts={block.heading_2.rich_text} />
            </h2>
          </summary>
          <div className="notion_toggle_details">
            {block.heading_2.children && (
              <Blocks blocks={block.heading_2.children} />
            )}
          </div>
        </details>
      ) : (
        <h1
          id={block.id}
          className={`notion_heading notion_heading_2 notion_color_${block.heading_2.color}`}
        >
          <RichTexts richTexts={block.heading_2.rich_text} />
        </h1>
      )}
    </>
  );
};

export default Heading2;
