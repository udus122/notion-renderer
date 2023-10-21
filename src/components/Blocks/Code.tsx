import { RichTexts } from "../RichTexts/index.js";

import type { CodeBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockComponentProps } from "src/types/utils.js";

export type CodeBlockObject = CodeBlockObjectResponse;

type Props = BlockComponentProps<CodeBlockObject>;

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
