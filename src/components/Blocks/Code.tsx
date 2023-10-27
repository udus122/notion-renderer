import { RichText } from "../RichText/RichText.js";

import type { CodeBlock } from "src/types/notion/blocks/code.js";

export const Code: CodeBlock = ({ block }) => {
  return (
    <div id={block.id} className="notion-code">
      <div className="notion-code-header">
        <div className="notion-code-langage">{block.code.language}</div>
      </div>
      <pre className="notion-code-body">
        <code>
          <RichText richText={block.code.rich_text} />
        </code>
      </pre>
      {block.code.caption && (
        <div className="notion-caption">
          <RichText richText={block.code.caption} />
        </div>
      )}
    </div>
  );
};
