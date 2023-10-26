import { RichText } from "../RichText/RichText.js";

import type { CodeBlock } from "src/types/notion/blocks/code.js";

export const Code: CodeBlock = ({ block }) => {
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
