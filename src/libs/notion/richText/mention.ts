import { randomUUID } from "crypto";

import { fetchDatabase, fetchPage, fetchSiteMeta } from "../../index.js";

import type { Overwrite } from "../../../types/utils.js";
import type { ArticleData } from "@extractus/article-extractor";
import type {
  DatabaseObjectResponse,
  MentionRichTextItemResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export type MentionObjectResponse = MentionRichTextItemResponse["mention"];

export type UserMentionObjectResponse = Extract<
  MentionObjectResponse,
  { type: "user" }
>;

type DateMentionObjectResponse = Extract<
  MentionObjectResponse,
  {
    type: "date";
  }
>;

type LinkPreviewMentionObjectResponse = Extract<
  MentionObjectResponse,
  {
    type: "link_preview";
  }
>;

type TemplateMentionMentionObjectResponse = Extract<
  MentionObjectResponse,
  {
    type: "template_mention";
  }
>;

type PageMentionObjectResponse = Extract<
  MentionObjectResponse,
  {
    type: "page";
  }
>;

type DatabaseMentionObjectResponse = Extract<
  MentionObjectResponse,
  {
    type: "database";
  }
>;

type UserMentionObject = UserMentionObjectResponse;

type DateMentionObject = DateMentionObjectResponse;

type LinkPreviewMentionObject = LinkPreviewMentionObjectResponse & {
  link_preview: { site_meta?: ArticleData };
};

type TempateMentionMentionObject = TemplateMentionMentionObjectResponse;

type PageMentionObject = PageMentionObjectResponse & {
  page: { page?: PageObjectResponse };
};

type DatabaseMentionObject = DatabaseMentionObjectResponse & {
  database: { database?: DatabaseObjectResponse };
};

export type MentionObject =
  | UserMentionObject
  | DateMentionObject
  | LinkPreviewMentionObject
  | TempateMentionMentionObject
  | PageMentionObject
  | DatabaseMentionObject;

export const convertMentionObjectResponse = async (
  mention: MentionObject
): Promise<MentionObject> => {
  switch (mention.type) {
    case "user": {
      return {
        ...mention,
      } satisfies UserMentionObject;
    }
    case "date": {
      return {
        ...mention,
      } satisfies DateMentionObject;
    }
    case "link_preview": {
      const { payload: site_meta, error } = await fetchSiteMeta(
        mention.link_preview.url
      );
      if (!error) {
        return {
          ...mention,
          link_preview: {
            ...mention.link_preview,
            site_meta: site_meta,
          },
        } satisfies LinkPreviewMentionObject;
      }
      return {
        ...mention,
      } satisfies LinkPreviewMentionObject;
    }
    case "template_mention": {
      return {
        ...mention,
      } satisfies TempateMentionMentionObject;
    }
    case "page": {
      const childPage = await fetchPage(mention.page.id);
      if (childPage) {
        return {
          ...mention,
          page: {
            ...mention.page,
            page: childPage,
          },
        } satisfies PageMentionObject;
      }
      return {
        ...mention,
      } satisfies PageMentionObject;
    }
    case "database": {
      const childDatabase = await fetchDatabase(mention.database.id);
      if (childDatabase) {
        return {
          ...mention,
          database: {
            ...mention.database,
            database: childDatabase,
          },
        } satisfies DatabaseMentionObject;
      }
      return {
        ...mention,
      } satisfies DatabaseMentionObject;
    }
    default: {
      return mention;
    }
  }
};

export type MentionRichTextItem = Overwrite<
  MentionRichTextItemResponse,
  {
    mention: MentionObject;
  }
> & { id?: string };

export const convertMentionRichTextItemResponse = async (
  item: MentionRichTextItemResponse
): Promise<MentionRichTextItem> => {
  const mention = await convertMentionObjectResponse(item.mention);
  return {
    ...item,
    mention,
    id: randomUUID(),
  } satisfies MentionRichTextItem;
};
