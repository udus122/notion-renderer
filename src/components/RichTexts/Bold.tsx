import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

type Props = React.ComponentProps<"strong"> & {
  richTextItem?: RichTextItemResponse;
};

const Bold: React.FC<Props> = ({ children }) => {
  return <strong className="notion_blod">{children}</strong>;
};

export default Bold;
