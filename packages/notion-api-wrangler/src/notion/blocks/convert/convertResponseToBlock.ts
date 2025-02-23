import { isFullBlock } from '@notionhq/client';

import { convertAudioResponseToBlock } from './audio';
import { convertBookmarkResponseToBlock } from './bookmark';
import { convertBreadcrumbResponseToBlock } from './breadcrumb';
import { convertBulletedListItemResponseToBlock } from './bulletedListItem';
import { convertCalloutResponseToBlock } from './callout';
import { convertChildDatabaseResponseToBlock } from './childDatabase';
import { convertChildPageResponseToBlock } from './childPage';
import { convertCodeResponseToBlock } from './code';
import { convertColumnResponseToBlock } from './column';
import { convertColumnListResponseToBlock } from './columnList';
import { convertDividerResponseToBlock } from './divider';
import { convertEmbedResponseToBlock } from './embed';
import { convertEquationResponseToBlock } from './equation';
import { convertFileResponseToBlock } from './file';
import { convertHeading1ResponseToBlock } from './heading1';
import { convertHeading2ResponseToBlock } from './heading2';
import { convertHeading3ResponseToBlock } from './heading3';
import { convertImageResponseToBlock } from './image';
import { convertLinkPreviewResponseToBlock } from './linkPreview';
import { convertLinkToPageResponseToBlock } from './linkToPage';
import { convertNumberedListItemResponseToBlock } from './numberedListItem';
import { convertParagraphResponseToBlock } from './paragraph';
import { convertPdfResponseToBlock } from './pdf';
import { convertQuoteResponseToBlock } from './quote';
import { convertSyncedBlockResponseToBlock } from './syncedBlock';
import { convertTableResponseToBlock } from './table';
import { convertTableOfContentsResponseToBlock } from './tableOfContents';
import { convertTableRowResponseToBlock } from './tableRow';
import { convertTemplateResponseToBlock } from './template';
import { convertToDoResponseToBlock } from './toDo';
import { convertToggleResponseToBlock } from './toggle';
import { convertUnsupportedResponseToBlock } from './unsupported';
import { convertVideoResponseToBlock } from './video';

import type { BlockBlockObject } from '@udus/notion-types';
import type { GetBlockResponse } from '@notionhq/client/build/src/api-endpoints';
import { FetchOptions, Result } from '../../../types';

export const convertResponseToBlock = async (
  block: GetBlockResponse,
  options: FetchOptions,
): Promise<Result<BlockBlockObject>> => {
  if (!isFullBlock(block)) {
    return { ok: false, data: new Error('Block is not full') };
  }

  switch (block.type) {
    case 'audio': {
      const data = await convertAudioResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'bookmark': {
      const data = await convertBookmarkResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'breadcrumb': {
      const data = await convertBreadcrumbResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'bulleted_list_item': {
      const data = await convertBulletedListItemResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'callout': {
      const data = await convertCalloutResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'child_database': {
      const data = await convertChildDatabaseResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'child_page': {
      const data = await convertChildPageResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'code': {
      const data = await convertCodeResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'column': {
      const data = await convertColumnResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'column_list': {
      const data = await convertColumnListResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'divider': {
      const data = await convertDividerResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'embed': {
      const data = await convertEmbedResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'equation': {
      const data = await convertEquationResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'file': {
      const data = await convertFileResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'heading_1': {
      const data = await convertHeading1ResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'heading_2': {
      const data = await convertHeading2ResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'heading_3': {
      const data = await convertHeading3ResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'image': {
      const data = await convertImageResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'link_preview': {
      const data = await convertLinkPreviewResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'link_to_page': {
      const data = await convertLinkToPageResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'numbered_list_item': {
      const data = await convertNumberedListItemResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'paragraph': {
      const data = await convertParagraphResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'pdf': {
      const data = await convertPdfResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'quote': {
      const data = await convertQuoteResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'synced_block': {
      const data = await convertSyncedBlockResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'table': {
      const data = await convertTableResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'table_of_contents': {
      const data = await convertTableOfContentsResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'table_row': {
      const data = await convertTableRowResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'template': {
      const data = await convertTemplateResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'to_do': {
      const data = await convertToDoResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'toggle': {
      const data = await convertToggleResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'unsupported': {
      const data = await convertUnsupportedResponseToBlock(block, options);
      return { ok: true, data };
    }
    case 'video': {
      const data = await convertVideoResponseToBlock(block, options);
      return { ok: true, data };
    }
  }
};
