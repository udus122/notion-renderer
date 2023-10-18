import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

type Props = React.ComponentProps<"strong"> & {
  richTextItem?: RichTextItemResponse;
};

export const Bold: React.FC<Props> = ({ children }) => {
  return <strong className="notion_blod">{children}</strong>;
};
