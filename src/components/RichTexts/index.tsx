import { RichText } from "./RichText.js";

import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const RichTexts = ({
  richTexts,
  customRichTextComponentMapper = {},
}: {
  richTexts: RichTextItemResponse[] | undefined;
  customRichTextComponentMapper?: object;
}) => {
  if (!richTexts) return null;

  return (
    <>
      {richTexts.map((richTextItem, index) => (
        <RichText
          richTextItem={richTextItem}
          richTextItemMapper={customRichTextComponentMapper}
          key={`${index}-${richTextItem.plain_text}`}
        />
      ))}
    </>
  );
};

export * from "./Annotation/index.js";
export * from "./Text.js";
export * from "./Link.js";
export * from "./InlineEquation.js";
export * from "./Mention.js";
export * from "./RichText.js";
