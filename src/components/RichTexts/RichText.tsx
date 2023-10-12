import { Equation } from "./Equation";
import { Mention } from "./Mention";
import { Text } from "./Text";

import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

export const RichText = ({
  richTextItem,
  customRichTextComponentMapper = {},
}: {
  richTextItem: RichTextItemResponse | undefined;
  customRichTextComponentMapper?: object;
}) => {
  if (!richTextItem) return null;
  const richTextComponentMapper = {
    text: Text,
    equation: Equation,
    mention: Mention,
    ...customRichTextComponentMapper,
  };

  if (!richTextItem) return null;
  switch (richTextItem.type) {
    case "text": {
      const TypeText = richTextComponentMapper[richTextItem.type];
      return <TypeText richTextItem={richTextItem} />;
    }
    case "equation": {
      const TypeEquation = richTextComponentMapper[richTextItem.type];
      return <TypeEquation richTextItem={richTextItem} />;
    }
    case "mention": {
      const TypeMention = richTextComponentMapper[richTextItem.type];
      return <TypeMention richTextItem={richTextItem} />;
    }
    default:
      console.warn(`${(richTextItem as { type: never }).type} is never.`);
      return null;
  }
};
