import { listComments } from "../comments.js";
import { fetchDatabase } from "../databases.js";
import { fetchPage } from "../pages.js";

import type { LinkToPageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { LinkToPageBlockObject } from "src/components/Blocks/LinkToPage.js";

export const convertLinkToPageResponseToBlock = async (
  block: LinkToPageBlockObjectResponse
) => {
  switch (block.link_to_page.type) {
    case "database_id": {
      const linkedDatabase = await fetchDatabase(
        block.link_to_page.database_id
      );
      return {
        ...block,
        link_to_page: {
          ...block.link_to_page,
          database: linkedDatabase,
        },
      } satisfies LinkToPageBlockObject;
    }
    case "page_id": {
      const linkedPage = await fetchPage(block.link_to_page.page_id);
      return {
        ...block,
        link_to_page: {
          ...block.link_to_page,
          page: linkedPage,
        },
      } satisfies LinkToPageBlockObject;
    }
    case "comment_id": {
      const linkedComments = await listComments({
        block_id: block.link_to_page.comment_id,
      });
      return {
        ...block,
        link_to_page: {
          ...block.link_to_page,
          comments: linkedComments,
        },
      } satisfies LinkToPageBlockObject;
    }
    default: {
      return null;
    }
  }
};
