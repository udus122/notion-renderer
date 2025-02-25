import { isFullPage } from '@notionhq/client';

import { convertResponseToPage } from './convert';
import { retrievePage } from './retrieve';

import type { PageObject } from '@udus/notion-types';
import type { GetPageParameters } from '@notionhq/client/build/src/api-endpoints';
import type { FetchOptions, Result } from '../../types';
import { withCache } from '../../utils/cache';

export const fetchPage = async (
  args: GetPageParameters,
  options: FetchOptions,
): Promise<Result<PageObject>> => {
  const { ok, data } = await withCache(
    `${fetchPage.name}-${args.page_id}`,
    (x: GetPageParameters) => retrievePage(x, options),
  )(args);

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
