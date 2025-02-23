import type { Client } from '@notionhq/client';
import PQueue from 'p-queue';

export type FetchOptions = {
  client: Client;
  queue: PQueue;
};

export type Result<T, E extends Error = Error> =
  | {
      ok: true;
      data: T;
    }
  | {
      ok: false;
      data: E;
    };
