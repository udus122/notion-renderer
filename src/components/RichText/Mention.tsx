import { isFullUser } from "@notionhq/client";

import { Annotation } from "./Annotation/Annotation.js";

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
        <span className="notion_rich_text_type_mention_type_database">
          <LinkComponent href={`/${richTextItem.mention.database.id}`}>
            <Annotation
              richTextItem={richTextItem}
              annotationMapper={annotationMapper}
            >
              {richTextItem.plain_text}
            </Annotation>
          </LinkComponent>
        </span>
      );
    case "date":
      return (
        <span className="notion_rich_text_type_mention_type_date">
          <Annotation
            richTextItem={richTextItem}
            annotationMapper={annotationMapper}
          >
            {richTextItem.plain_text}
          </Annotation>
        </span>
      );
    case "link_preview":
      return (
        <span className="notion_rich_text_type_mention_type_link_preview">
          <LinkComponent href={richTextItem.mention.link_preview.url}>
            <Annotation
              richTextItem={richTextItem}
              annotationMapper={annotationMapper}
            >
              {richTextItem.plain_text}
            </Annotation>
          </LinkComponent>
        </span>
      );
    case "page":
      return (
        <span className="notion_rich_text_type_mention_type_page">
          <LinkComponent href={`/${richTextItem.mention.page.id}`}>
            <Annotation
              richTextItem={richTextItem}
              annotationMapper={annotationMapper}
            >
              {richTextItem.plain_text}
            </Annotation>
          </LinkComponent>
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
          <Annotation
            richTextItem={richTextItem}
            annotationMapper={annotationMapper}
          >
            {richTextItem.plain_text.replace("@", "")}
          </Annotation>
        </span>
      );
    default:
      console.error(`unknown mention type.`);
      return null;
  }
};
