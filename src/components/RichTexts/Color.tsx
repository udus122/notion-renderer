import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

type Props = React.ComponentProps<"span"> & {
  richTextItem: RichTextItemResponse;
};

export const Color: React.FC<Props> = ({ richTextItem, children }) => {
  return (
    <span className={`notion_color_${richTextItem.annotations.color}`}>
      {children}
    </span>
  );
};
