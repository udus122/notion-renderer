import type { RichTextItem } from "src/types/notion/richText/richTextItem.js";

type Props = React.ComponentProps<"span"> & {
  richTextItem: RichTextItem;
};

export const Color: React.FC<Props> = ({ richTextItem, children }) => {
  return (
    <span className={`notion_color_${richTextItem.annotations.color}`}>
      {children}
    </span>
  );
};
