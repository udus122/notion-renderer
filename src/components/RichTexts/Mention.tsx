import { isFullUser } from "@notionhq/client";

import { Annotations } from "./Annotation/Annotation.js";

import type { MentionRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { RichTextProps } from "src/types/utils.js";

export type MentionRichTextItem = MentionRichTextItemResponse;

type Props = Omit<RichTextProps<MentionRichTextItem>, "richTextItemMapper">;

export const Mention: React.FC<Props> = ({
  richTextItem,
  annotationMapper,
  LinkComponent,
}) => {
  switch (richTextItem.mention.type) {
    case "database":
      return (
        <LinkComponent href={`/${richTextItem.mention.database.id}`}>
          <span className="notion_rich_text_type_mention_type_database">
            <Annotations
              richTextItem={richTextItem}
              annotationMapper={annotationMapper}
            >
              {richTextItem.plain_text}
            </Annotations>
          </span>
        </LinkComponent>
      );
    case "date":
      return (
        <span className="notion_rich_text_type_mention_type_date">
          <Annotations
            richTextItem={richTextItem}
            annotationMapper={annotationMapper}
          >
            {richTextItem.plain_text}
          </Annotations>
        </span>
      );
    case "link_preview":
      return (
        <LinkComponent href={richTextItem.mention.link_preview.url}>
          <span className="notion_rich_text_type_mention_type_link_preview">
            <Annotations
              richTextItem={richTextItem}
              annotationMapper={annotationMapper}
            >
              {richTextItem.plain_text}
            </Annotations>
          </span>
        </LinkComponent>
      );
    case "page":
      return (
        <LinkComponent href={`/${richTextItem.mention.page.id}`}>
          <span className="notion_rich_text_type_mention_type_page">
            <Annotations
              richTextItem={richTextItem}
              annotationMapper={annotationMapper}
            >
              {richTextItem.plain_text}
            </Annotations>
          </span>
        </LinkComponent>
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
          <Annotations
            richTextItem={richTextItem}
            annotationMapper={annotationMapper}
          >
            {richTextItem.plain_text.replace("@", "")}
          </Annotations>
        </span>
      );
    default:
      console.error(`unknown mention type.`);
      return null;
  }
};
