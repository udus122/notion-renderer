import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

type Props = React.ComponentProps<"em"> & {
  richTextItem: RichTextItemResponse;
};

const Italic: React.FC<Props> = ({ children }) => {
  return <em className="notion_italic">{children}</em>;
};

export default Italic;
