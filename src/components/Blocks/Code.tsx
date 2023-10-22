import { RichText } from "../RichText/RichText.js";

import type { CodeBlockObject } from "../../libs/notion/blocks/code.js";
import type { BlockProps } from "../../types/utils.js";

type Props = BlockProps<CodeBlockObject>;

export const Code: React.FC<Props> = ({ block }) => {
  return (
    <div id={block.id} className="notion_code">
      <div className="notion_code_header">
        <div className="notion_code_langage">{block.code.language}</div>
      </div>
      <pre className="notion_code_body">
        <code>
          <RichText richText={block.code.rich_text} />
        </code>
      </pre>
      {block.code.caption && (
        <div className="notion_caption">
          <RichText richText={block.code.caption} />
        </div>
      )}
    </div>
  );
};
