import { InlineEquation } from "./InlineEquation.js";
import { Mention } from "./Mention.js";
import { Text } from "./Text.js";

import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

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
    equation: InlineEquation,
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
