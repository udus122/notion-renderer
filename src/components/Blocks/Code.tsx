import { RichTexts } from "../RichTexts/RichTexts.js";

import type {
  BlockComponentProps,
  CodeBlockObjectComponent,
} from "../../types/components.js";

type Props = BlockComponentProps<CodeBlockObjectComponent>;

export const Code: React.FC<Props> = ({ block }) => {
  return (
    <div id={block.id} className="notion_code">
      <div className="notion_code_header">
        <div className="notion_code_langage">{block.code.language}</div>
      </div>
      <pre className="notion_code_body">
        <code>
          <RichTexts richTexts={block.code.rich_text} />
        </code>
      </pre>
      {block.code.caption && (
        <div className="notion_caption">
          <RichTexts richTexts={block.code.caption} />
        </div>
      )}
    </div>
  );
};
