import { isFullUser } from "@notionhq/client";

import { useMapper } from "../mapper.js";

import { Annotation } from "./Annotation/Annotation.js";

import type { MentionRichTextItem } from "src/libs/notion/richText/mention.js";
import type { RichTextProps } from "src/types/utils.js";

type Props = Omit<RichTextProps<MentionRichTextItem>, "richTextItemMapper">;

export const Mention: React.FC<Props> = ({ richText: richTextItem }) => {
  const { Link } = useMapper();

  switch (richTextItem.mention.type) {
    case "database":
      return (
        <span className="notion_rich_text_type_mention_type_database">
          <Link href={`/${richTextItem.mention.database.id}`}>
            <Annotation richTextItem={richTextItem}>
              {richTextItem.plain_text}
            </Annotation>
          </Link>
        </span>
      );
    case "date":
      return (
        <span className="notion_rich_text_type_mention_type_date">
          <Annotation richTextItem={richTextItem}>
            {richTextItem.plain_text}
          </Annotation>
        </span>
      );
    case "link_preview":
      return (
        <span className="notion_rich_text_type_mention_type_link_preview">
          <Link href={richTextItem.mention.link_preview.url}>
            <Annotation richTextItem={richTextItem}>
              {richTextItem.plain_text}
            </Annotation>
          </Link>
        </span>
      );
    case "page":
      return (
        <span className="notion_rich_text_type_mention_type_page">
          <Link href={`/${richTextItem.mention.page.id}`}>
            <Annotation richTextItem={richTextItem}>
              {richTextItem.plain_text}
            </Annotation>
          </Link>
        </span>
      );
    case "template_mention":
      console.warn(`${richTextItem.mention.type} is not supported yet.`);
      return null;
    case "user":
      return (
        <span className="notion_rich_text_type_mention_type_user">
          {isFullUser(richTextItem.mention.user) ? (
            <img
              className="notion_rich_text_type_mention_type_user_avatar"
              src={richTextItem.mention.user.avatar_url ?? undefined}
              alt="user avater"
            />
          ) : (
            "@"
          )}
          <Annotation richTextItem={richTextItem}>
            {richTextItem.plain_text.replace("@", "")}
          </Annotation>
        </span>
      );
    default:
      console.error(`unknown mention type.`);
      return null;
  }
};
