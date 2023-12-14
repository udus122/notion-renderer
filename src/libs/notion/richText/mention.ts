import { isFullDatabase, isFullPage } from "@notionhq/client";

import { fetchSiteMeta } from "../../../libs/utils/sitemeta.js";
import { generateUUID } from "../../utils/utils.js";
import { retrieveDatabase } from "../databases.js";
import { retrievePage } from "../index.js";

import type {
  MentionRichTextItemObject,
  DatabaseMentionObject,
  PageMentionObject,
  TempateMentionMentionObject,
  LinkPreviewMentionObject,
  DateMentionObject,
  UserMentionObject,
  MentionObject,
} from "../../../types/notion/richText/mention.js";
import type { MentionRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertMentionObjectResponse = async (
  mention: MentionObject,
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
      const { ok, data } = await fetchSiteMeta(mention.link_preview.url);
      if (!ok) {
        return {
          ...mention,
        } satisfies LinkPreviewMentionObject;
      }

      return {
        ...mention,
        link_preview: {
          ...mention.link_preview,
          site_meta: data,
        },
      } satisfies LinkPreviewMentionObject;
    }
    case "template_mention": {
      return {
        ...mention,
      } satisfies TempateMentionMentionObject;
    }
    case "page": {
      const { ok, data } = await retrievePage({ page_id: mention.page.id });
      if (ok && isFullPage(data)) {
        return {
          ...mention,
          page: {
            ...mention.page,
            page: data,
          },
        } satisfies PageMentionObject;
      }
      return {
        ...mention,
      } satisfies PageMentionObject;
    }
    case "database": {
      const { ok, data } = await retrieveDatabase({
        database_id: mention.database.id,
      });
      if (ok && isFullDatabase(data)) {
        return {
          ...mention,
          database: {
            ...mention.database,
            database: data,
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

export const convertMentionRichTextItemResponse = async (
  item: MentionRichTextItemResponse,
): Promise<MentionRichTextItemObject> => {
  const mention = await convertMentionObjectResponse(item.mention);
  return {
    ...item,
    mention,
    id: generateUUID(),
  } satisfies MentionRichTextItemObject;
};
