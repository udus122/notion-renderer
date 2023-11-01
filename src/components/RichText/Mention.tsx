import { isFullUser } from "@notionhq/client";

import { DateComponent } from "../Date.js";
import { useMapper } from "../Mapper/hooks.js";

import { Annotation } from "./Annotation/Annotation.js";

import type { MentionRichTextItemObject } from "../../types/notion/richText/mention.js";
import type { RichTextItemProps } from "../../types/notion/richText/richTextItem.js";

type Props = Omit<
  RichTextItemProps<MentionRichTextItemObject>,
  "richTextItemMapper"
>;

export const Mention: React.FC<Props> = ({ richText: richTextItem }) => {
  const { Link } = useMapper();

  switch (richTextItem.mention.type) {
    case "database":
      return (
        <span className="notion-rich-text-type-mention-type-database">
          <Link href={`/${richTextItem.mention.database.id}`}>
            <Annotation richTextItem={richTextItem}>
              {richTextItem.plain_text}
            </Annotation>
          </Link>
        </span>
      );
    case "date":
      return (
        <span className="notion-rich-text-type-mention-type-date">
          <DateComponent date={richTextItem.mention.date} />
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
              className="notion-rich-text-type-mention-type-user-avatar"
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
