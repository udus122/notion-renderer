import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

type Props = React.ComponentProps<"del"> & {
  richTextItem: RichTextItemResponse;
};

export const Strikethrough: React.FC<Props> = ({ children }) => {
  return <del className="notion_strikethrough">{children}</del>;
};
