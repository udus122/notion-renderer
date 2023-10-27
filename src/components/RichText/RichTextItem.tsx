import { useMapper } from "../Mapper/hooks.js";

import { InlineEquation } from "./InlineEquation.js";
import { Mention } from "./Mention.js";
import { Text } from "./Text.js";

import type { RichTextItemProps } from "../../types/notion/common.js";
import type { RichTextItem as RichTextItemType } from "../../types/notion/richText/richTextItem.js";

type Props = RichTextItemProps<RichTextItemType>;

export const RichTextItem: React.FC<Props> = (props) => {
  if (!props.richText) return null;
  return (
    <span className="notion-rich-text-item">
      <RichTextItemContent {...props} />
    </span>
  );
};

const RichTextItemContent: React.FC<Props> = ({ richText: richTextItem }) => {
  const { richTextItemMapper } = useMapper();

  const mapper = {
    equation: InlineEquation,
    mention: Mention,
    text: Text,
    ...richTextItemMapper,
  };

  switch (richTextItem.type) {
    case "equation": {
      const TypeEquation = mapper[richTextItem.type];
      return <TypeEquation richText={richTextItem} />;
    }
    case "mention": {
      const TypeMention = mapper[richTextItem.type];
      return <TypeMention richText={richTextItem} />;
    }
    case "text": {
      const TypeText = mapper[richTextItem.type];
      return <TypeText richText={richTextItem} />;
    }
    default:
      console.warn(`${(richTextItem as { type: never }).type} is never.`);
      return null;
  }
};
