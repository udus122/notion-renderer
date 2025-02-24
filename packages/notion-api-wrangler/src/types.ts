import type { Client } from '@notionhq/client';

export type FetchOptions = {
  client: Client;
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
