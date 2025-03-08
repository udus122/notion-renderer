import { Client } from '@notionhq/client';
import {
  type GetBlockParameters,
  type ListBlockChildrenParameters,
} from '@notionhq/client/build/src/api-endpoints';

import { BlockBlockObject } from '@udus/notion-types';

import { fetchBlock } from './notion/blocks/fetch';
import { fetchBlockList } from './notion/blocks/fetchBlockList';
import { NotionApiQueue, type QueueOptions, type Queue } from './utils/queue';
import {
  Cache,
  CacheOptions,
  InMemoryCache,
  LocalFSCache,
} from './utils/cache';

export class NotionAPIWrangler {
  private queue: Queue;
  private cache: Cache;

  constructor(
    private client: Client,
    queueOptions?: QueueOptions,
    cacheOptions?: CacheOptions,
  ) {
    this.queue = new NotionApiQueue(queueOptions);
    switch (cacheOptions?.type) {
      case 's3':
        throw new Error('Not implemented');
      case 'local-fs':
        this.cache = new LocalFSCache(cacheOptions.basePath);
        break;
      case 'in-memory':
      default:
        this.cache = new InMemoryCache(cacheOptions?.maxSize);
    }
  }

  public readonly blocks = {
    retrieve: async (args: GetBlockParameters): Promise<BlockBlockObject> => {
      const { ok, data } = await fetchBlock(args, {
        client: this.client,
        queue: this.queue,
        cache: this.cache,
      });
      if (!ok) {
        throw data;
      }
      return data;
    },

    children: {
      list: async (
        args: ListBlockChildrenParameters,
      ): Promise<BlockBlockObject[]> => {
        const { ok, data } = await fetchBlockList(args, {
          client: this.client,
          queue: this.queue,
          cache: this.cache,
        });
        if (!ok) {
          throw data;
        }
        return data;
      },
    },
  };

  public async listBlockChildren() {
    throw new Error('Not implemented');
  }

  public async retrieveBlock() {
    throw new Error('Not implemented');
  }

  public async retrievePages() {
    throw new Error('Not implemented');
  }

  public async queryDatabase() {
    throw new Error('Not implemented');
  }

  public async retrieveDatabase() {
    throw new Error('Not implemented');
  }

  public async retrieveProperties() {
    throw new Error('Not implemented');
  }

  public async listComments() {
    throw new Error('Not implemented');
  }
}
