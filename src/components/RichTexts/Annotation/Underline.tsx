import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

type Props = React.ComponentProps<"u"> & { richTextItem: RichTextItemResponse };

const Underline: React.FC<Props> = ({ children }) => {
  return <u className="notion_underline">{children}</u>;
};

export default Underline;
