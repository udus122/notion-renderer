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
          customRichTextComponentMapper={customRichTextComponentMapper}
          key={`${index}-${richTextItem.plain_text}`}
        />
      ))}
    </>
  );
};
