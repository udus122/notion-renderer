import { isFullBlock } from "@notionhq/client";

import { convertAudioResponseToBlock } from "./audio.js";
import { convertBookmarkResponseToBlock } from "./bookmark.js";
import { convertBreadcrumbResponseToBlock } from "./breadcrumb.js";
import { convertBulletedListItemResponseToBlock } from "./bulletedListItem.js";
import { convertCalloutResponseToBlock } from "./callout.js";
import { convertChildDatabaseResponseToBlock } from "./childDatabase.js";
import { convertChildPageResponseToBlock } from "./childPage.js";
import { convertCodeResponseToBlock } from "./code.js";
import { convertColumnResponseToBlock } from "./column.js";
import { convertColumnListResponseToBlock } from "./columnList.js";
import { convertDividerResponseToBlock } from "./divider.js";
import { convertEmbedResponseToBlock } from "./embed.js";
import { convertEquationResponseToBlock } from "./equation.js";
import { convertFileResponseToBlock } from "./file.js";
import { convertHeading1ResponseToBlock } from "./heading1.js";
import { convertHeading2ResponseToBlock } from "./heading2.js";
import { convertHeading3ResponseToBlock } from "./heading3.js";
import { convertImageResponseToBlock } from "./image.js";
import { convertLinkPreviewResponseToBlock } from "./linkPreview.js";
import { convertLinkToPageResponseToBlock } from "./linkToPage.js";
import { convertNumberedListItemResponseToBlock } from "./numberedListItem.js";
import { convertParagraphResponseToBlock } from "./paragraph.js";
import { convertPdfResponseToBlock } from "./pdf.js";
import { convertQuoteResponseToBlock } from "./quote.js";
import { convertSyncedBlockResponseToBlock } from "./syncedBlock.js";
import { convertTableResponseToBlock } from "./table.js";
import { convertTableOfContentsResponseToBlock } from "./tableOfContents.js";
import { convertTableRowResponseToBlock } from "./tableRow.js";
import { convertTemplateResponseToBlock } from "./template.js";
import { convertToDoResponseToBlock } from "./toDo.js";
import { convertToggleResponseToBlock } from "./toggle.js";
import { convertUnsupportedResponseToBlock } from "./unsupported.js";
import { convertVideoResponseToBlock } from "./video.js";

import type { BlockBlockObject } from "../../../../types/notion/block/block.js";
import type { Result } from "../../../../types/utils.js";
import type { GetBlockResponse } from "@notionhq/client/build/src/api-endpoints.js";

export const convertResponseToBlock = async (
  block: GetBlockResponse,
): Promise<Result<BlockBlockObject>> => {
  if (!isFullBlock(block)) {
    return { ok: false, data: new Error("Block is not full") };
  }

  switch (block.type) {
    case "audio": {
      const data = await convertAudioResponseToBlock(block);
      return { ok: true, data };
    }
    case "bookmark": {
      const data = await convertBookmarkResponseToBlock(block);
      return { ok: true, data };
    }
    case "breadcrumb": {
      const data = await convertBreadcrumbResponseToBlock(block);
      return { ok: true, data };
    }
    case "bulleted_list_item": {
      const data = await convertBulletedListItemResponseToBlock(block);
      return { ok: true, data };
    }
    case "callout": {
      const data = await convertCalloutResponseToBlock(block);
      return { ok: true, data };
    }
    case "child_database": {
      const data = await convertChildDatabaseResponseToBlock(block);
      return { ok: true, data };
    }
    case "child_page": {
      const data = await convertChildPageResponseToBlock(block);
      return { ok: true, data };
    }
    case "code": {
      const data = await convertCodeResponseToBlock(block);
      return { ok: true, data };
    }
    case "column": {
      const data = await convertColumnResponseToBlock(block);
      return { ok: true, data };
    }
    case "column_list": {
      const data = await convertColumnListResponseToBlock(block);
      return { ok: true, data };
    }
    case "divider": {
      const data = await convertDividerResponseToBlock(block);
      return { ok: true, data };
    }
    case "embed": {
      const data = await convertEmbedResponseToBlock(block);
      return { ok: true, data };
    }
    case "equation": {
      const data = await convertEquationResponseToBlock(block);
      return { ok: true, data };
    }
    case "file": {
      const data = await convertFileResponseToBlock(block);
      return { ok: true, data };
    }
    case "heading_1": {
      const data = await convertHeading1ResponseToBlock(block);
      return { ok: true, data };
    }
    case "heading_2": {
      const data = await convertHeading2ResponseToBlock(block);
      return { ok: true, data };
    }
    case "heading_3": {
      const data = await convertHeading3ResponseToBlock(block);
      return { ok: true, data };
    }
    case "image": {
      const data = await convertImageResponseToBlock(block);
      return { ok: true, data };
    }
    case "link_preview": {
      const data = await convertLinkPreviewResponseToBlock(block);
      return { ok: true, data };
    }
    case "link_to_page": {
      const data = await convertLinkToPageResponseToBlock(block);
      return { ok: true, data };
    }
    case "numbered_list_item": {
      const data = await convertNumberedListItemResponseToBlock(block);
      return { ok: true, data };
    }
    case "paragraph": {
      const data = await convertParagraphResponseToBlock(block);
      return { ok: true, data };
    }
    case "pdf": {
      const data = await convertPdfResponseToBlock(block);
      return { ok: true, data };
    }
    case "quote": {
      const data = await convertQuoteResponseToBlock(block);
      return { ok: true, data };
    }
    case "synced_block": {
      const data = await convertSyncedBlockResponseToBlock(block);
      return { ok: true, data };
    }
    case "table": {
      const data = await convertTableResponseToBlock(block);
      return { ok: true, data };
    }
    case "table_of_contents": {
      const data = await convertTableOfContentsResponseToBlock(block);
      return { ok: true, data };
    }
    case "table_row": {
      const data = await convertTableRowResponseToBlock(block);
      return { ok: true, data };
    }
    case "template": {
      const data = await convertTemplateResponseToBlock(block);
      return { ok: true, data };
    }
    case "to_do": {
      const data = await convertToDoResponseToBlock(block);
      return { ok: true, data };
    }
    case "toggle": {
      const data = await convertToggleResponseToBlock(block);
      return { ok: true, data };
    }
    case "unsupported": {
      const data = await convertUnsupportedResponseToBlock(block);
      return { ok: true, data };
    }
    case "video": {
      const data = await convertVideoResponseToBlock(block);
      return { ok: true, data };
    }
  }
};
