import { Client, isFullDatabase, isFullPage } from "@notionhq/client";

import { fetchSiteMeta } from "../../utils/sitemeta.js";
import { generateUUID } from "../../utils/utils.js";
import { retrieveDatabase } from "../database/retrieve.js";
import { retrievePage } from "../index.js";

import type {
  MentionRichTextItemObject,
  DatabaseMentionObject,
  PageMentionObject,
  TemplateMentionMentionObject,
  LinkPreviewMentionObject,
  DateMentionObject,
  UserMentionObject,
  MentionObject,
} from "@udus/notion-types";
import type { MentionRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertMentionObjectResponse = async (
  mention: MentionObject,
  client: Client,
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
      } satisfies TemplateMentionMentionObject;
    }
    case "page": {
      const { ok, data } = await retrievePage(client, {
        page_id: mention.page.id,
      });
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
      const { ok, data } = await retrieveDatabase(client, {
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
  client: Client,
): Promise<MentionRichTextItemObject> => {
  const mention = await convertMentionObjectResponse(item.mention, client);
  return {
    ...item,
    mention,
    id: generateUUID(),
  } satisfies MentionRichTextItemObject;
};
