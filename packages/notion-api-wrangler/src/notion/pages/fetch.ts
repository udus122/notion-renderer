import { isFullPage } from '@notionhq/client';

import { convertResponseToPage } from './convert';
import { retrievePage } from './retrieve';

import type { PageObject } from '@udus/notion-types';
import type { GetPageParameters } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions, Result } from '../../types';

export const fetchPage = async (
  args: GetPageParameters,
  options: FetchOptions,
): Promise<Result<PageObject>> => {
  const { ok, data } = await retrievePage(args, options);

  if (!ok) {
    return { ok, data };
  }

  if (!isFullPage(data)) {
    return { ok: false, data: new Error('Page is not full') };
  }

  const pageObject = await convertResponseToPage(data, options);

  if (!pageObject) {
    return { ok: false, data: new Error('Failed to convert to page object') };
  }

  return { ok: true, data: pageObject };
};
