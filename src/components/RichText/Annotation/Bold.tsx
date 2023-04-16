import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

type Props = React.ComponentProps<"strong"> & {
  richTextItem: RichTextItemResponse;
};

export const Bold: React.FC<Props> = ({ richTextItem, children }) => {
  return <strong className="notion_blod">{children}</strong>;
};
