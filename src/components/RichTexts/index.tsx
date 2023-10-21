import { RichText, type RichTextItem } from "./RichText.js";

import type { RichTextProps } from "src/types/utils.js";

type Props = { richTextItems: RichTextItem[] } & Omit<
  RichTextProps<RichTextItem>,
  "richTextItem"
>;

export const RichTexts: React.FC<Props> = ({
  richTextItems,
  richTextItemMapper,
  annotationMapper,
  LinkComponent,
}) => {
  if (!richTextItems) return null;

  return (
    <>
      {richTextItems.map((richTextItem, index) => (
        <RichText
          key={`${index}-${richTextItem.plain_text}`}
          richTextItem={richTextItem}
          richTextItemMapper={richTextItemMapper}
          annotationMapper={annotationMapper}
          LinkComponent={LinkComponent}
        />
      ))}
    </>
  );
};

export * from "./Annotation/index.js";
export * from "./Text.js";
export * from "./InlineEquation.js";
export * from "./Mention.js";
export * from "./RichText.js";
