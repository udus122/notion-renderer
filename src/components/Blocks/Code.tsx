import SyntaxHighlighter from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

import RichTexts from "../RichTexts/RichTexts";

import type { BlockComponentProps, CodeBlockObjectComponent } from "@/types";

type Props = BlockComponentProps<CodeBlockObjectComponent>;

const Code: React.FC<Props> = ({ block }) => {
  return (
    <div id={block.id} className="notion_block notion_code">
      <div className="notion_code_header">
        <div className="notion_code_langage">{block.code.language}</div>
      </div>
      {/* TODO: create copy button */}
      <SyntaxHighlighter
        language={
          block.code.language === "plain text" ? "text" : block.code.language
        }
        style={a11yDark}
        className="notion_code_pre"
        customStyle={{ backgroundColor: "rgba(255,255,255,0.03)" }}
      >
        {block.code.rich_text.map((t) => t.plain_text).join("")}
      </SyntaxHighlighter>
      {block.code.caption && (
        <div className="notion_caption">
          <RichTexts richTexts={block.code.caption} />
        </div>
      )}
    </div>
  );
};

export default Code;
