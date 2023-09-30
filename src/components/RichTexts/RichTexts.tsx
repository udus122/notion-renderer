import RichText from "./RichText";

import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

const RichTexts = ({
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

export default RichTexts;
