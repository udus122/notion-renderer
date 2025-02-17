import { isFullUser } from "@notionhq/client";

import { DateComponent } from "../Common/Date";
import { Icon } from "../Common/Icon";
import { useMapper } from "../hooks";

import type { MentionRichTextItemObject } from "@udus/notion-types";
import type { RichTextItemProps } from "@udus/notion-types";

type Props = Omit<
  RichTextItemProps<MentionRichTextItemObject>,
  "richTextItemMapper"
>;

export const Mention: React.FC<Props> = ({ richText: richTextItem }) => {
  const { Link } = useMapper();

  switch (richTextItem.mention.type) {
    case "database":
      return (
        <span className="notion-database-mention-rich-text">
          <Link prefix="/" link={richTextItem.mention.database.id}>
            {richTextItem.mention.database.database && (
              <Icon icon={richTextItem.mention.database.database?.icon} />
            )}
            {richTextItem.plain_text}
          </Link>
        </span>
      );
    case "date":
      return (
        <span className="notion-date-mention-rich-text">
          <DateComponent date={richTextItem.mention.date} />
        </span>
      );
    case "link_preview":
      return (
        <a
          href={richTextItem.mention.link_preview.url}
          className="notion-link-preview-mention-rich-text"
        >
          {richTextItem.plain_text}
        </a>
      );
    case "page":
      return (
        <span className="notion-page-mention-rich-text">
          <Link link={richTextItem.mention.page.id}>
            {richTextItem.mention.page.page && (
              <span className="notion-page-mention-icon">
                <Icon icon={richTextItem.mention.page.page?.icon} />
              </span>
            )}
            <span className="notion-page-mention-title">
              {richTextItem.plain_text}
            </span>
          </Link>
        </span>
      );
    case "template_mention":
      console.warn(`${richTextItem.mention.type} is not supported.`);
      return null;
    case "user":
      return (
        <span className="notion-user-mention-rich-text">
          {isFullUser(richTextItem.mention.user) ? (
            <img
              className="notion-user-mention-rich-text-avatar"
              src={richTextItem.mention.user.avatar_url ?? undefined}
              alt="user avater"
            />
          ) : (
            "@"
          )}
          {richTextItem.plain_text.replace("@", "")}
        </span>
      );
    default:
      console.error("unknown mention type.");
      return null;
  }
};
