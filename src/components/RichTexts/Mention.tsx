import Annotations from "./Annotations";

import type { MentionRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

type Props = {
  richTextItem: MentionRichTextItemResponse;
};

const Mention: React.FC<Props> = ({ richTextItem }) => {
  switch (richTextItem.mention.type) {
    case "database":
      return (
        <span className="notion_rich_text_type_mention mention_type_database">
          <Annotations richTextItem={richTextItem}>
            {richTextItem.plain_text}
          </Annotations>
        </span>
      );
    case "date":
      console.warn(`${richTextItem.mention.type} is not supported yet.`);
      return null;
    case "link_preview":
      console.warn(`${richTextItem.mention.type} is not supported yet.`);
      return null;
    case "page":
      return (
        <span className="notion_rich_text_type_mention mention_type_page">
          <Annotations richTextItem={richTextItem}>
            {richTextItem.plain_text}
          </Annotations>
        </span>
      );
    case "template_mention":
      console.warn(`${richTextItem.mention.type} is not supported yet.`);
      return null;
    case "user":
      console.warn(`${richTextItem.mention.type} is not supported yet.`);
      return null;
    default:
      console.error(`unknown mention type.`);
      return null;
  }
};

export default Mention;
