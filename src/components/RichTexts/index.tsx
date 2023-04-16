import { RichText } from "./RichText";

import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

export const RichTexts = ({
  richText,
  customRichTextComponentMapper = {},
}: {
  richText: RichTextItemResponse[] | undefined;
  customRichTextComponentMapper?: object;
}) => {
  if (!richText) return null;

  return (
    <>
      {richText.map((richTextItem, index) => (
        <RichText
          richTextItem={richTextItem}
          customRichTextComponentMapper={customRichTextComponentMapper}
          key={`${index}-${richTextItem.plain_text}`}
        />
      ))}
    </>
  );
};
