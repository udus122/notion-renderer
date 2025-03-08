import type { Client } from '@notionhq/client';
import { Queue } from './utils/queue';
import { Cache } from './utils/cache';

export type FetchOptions = {
  client: Client;
  queue: Queue;
  cache: Cache;
};

export type NotionApiCaller<Args, Return> = (
  args: Args,
  options: FetchOptions,
) => Promise<Return>;

export type Result<T, E extends Error = Error> =
  | {
      ok: true;
      data: T;
    }
  | {
      ok: false;
      data: E;
    };
