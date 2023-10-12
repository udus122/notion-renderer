import { RichTexts } from "../RichTexts/RichTexts";

import { Blocks } from "./Blocks";

import type {
  BlockComponentProps,
  Heading1BlockObjectComponent,
} from "@/types/components";

type Props = BlockComponentProps<Heading1BlockObjectComponent>;

export const Heading1: React.FC<Props> = ({ block }) => {
  return (
    <>
      {block.heading_1.is_toggleable ? (
        <details
          id={block.id}
          className={`notion_heading notion_heading_1 notion_toggle notion_color_${block.heading_1.color}`}
        >
          <summary className="notion_toggle_summary">
            <h1>
              <RichTexts richTexts={block.heading_1.rich_text} />
            </h1>
          </summary>
          <div className="notion_toggle_details">
            {block.heading_1.children && (
              <Blocks blocks={block.heading_1.children} />
            )}
          </div>
        </details>
      ) : (
        <h1
          id={block.id}
          className={`notion_heading notion_heading_1 notion_color_${block.heading_1.color}`}
        >
          <RichTexts richTexts={block.heading_1.rich_text} />
        </h1>
      )}
    </>
  );
};
