import { Checkbox } from "../Common/Checkbox";
import { RichText } from "../RichText/RichText";

import { BlockList } from "./BlockList";

import type { ToDoBlock } from "@udus/notion-types";

export const ToDo: ToDoBlock = ({ block }) => {
  const { checked } = block.to_do;

  return (
    <div
      id={block.id}
      className={`notion-block notion-to-do notion-color-${block.to_do.color}`}
    >
      <div className="notion-to-do-content">
        <span className="notion-to-do-icon">
          <Checkbox checked={checked} />
        </span>
        <span className={`notion-to-do-text ${checked ? "checked" : ""}`}>
          <RichText richText={block.to_do.rich_text} />
        </span>
      </div>
      {block.to_do.children && (
        <div className="notion-to-do-children">
          <BlockList blocks={block.to_do.children} />
        </div>
      )}
    </div>
  );
};
