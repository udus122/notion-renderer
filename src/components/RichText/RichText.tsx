import { RichTextItem } from "./RichTextItem.js";

import type { RichTextProps } from "src/types/utils.js";

type Props = { richTextItems: RichTextItem[] } & Omit<
  RichTextProps<RichTextItem>,
  "richTextItem"
>;

export const RichText: React.FC<Props> = ({
  richTextItems,
  richTextItemMapper,
  annotationMapper,
  LinkComponent,
}) => {
  if (!richTextItems) return null;

  return (
    <span className="notion_rich_text">
      {richTextItems.map((richTextItem, index) => (
        <RichTextItem
          key={`${index}-${richTextItem.plain_text}`}
          richTextItem={richTextItem}
          richTextItemMapper={richTextItemMapper}
          annotationMapper={annotationMapper}
          LinkComponent={LinkComponent}
        />
      ))}
    </span>
  );
};
