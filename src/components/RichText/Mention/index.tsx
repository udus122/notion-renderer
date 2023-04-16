import { MentionRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

import { Annotation } from "../Annotation";

type Props = {
  richTextItem: MentionRichTextItemResponse;
};

export const Mention: React.FC<Props> = ({ richTextItem }) => {
  switch (richTextItem.mention.type) {
    case "database":
      return (
        <span className="notion_rich_text_type_mention mention_type_database">
          <Annotation richTextItem={richTextItem}>
            {richTextItem.plain_text}
          </Annotation>
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
          <Annotation richTextItem={richTextItem}>
            {richTextItem.plain_text}
          </Annotation>
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
