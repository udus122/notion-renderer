import PQueue from 'p-queue';

import { Client } from '@notionhq/client';
import {
  type GetBlockParameters,
  type ListBlockChildrenParameters,
} from '@notionhq/client/build/src/api-endpoints';

import { BlockBlockObject } from '@udus/notion-types';

import { fetchBlock } from './notion/blocks/fetch';
import { fetchBlockList } from './notion/blocks/fetchBlockList';

export interface NotionAPIWranglerOptions {}

export class NotionAPIWrangler {
  // Notion APIを1秒に3回までに制限
  private queue = new PQueue({
    interval: 1000,
    intervalCap: 3,
    throwOnTimeout: true,
  });
  constructor(private client: Client) {}

  public readonly blocks = {
    retrieve: async (args: GetBlockParameters): Promise<BlockBlockObject> => {
      const { ok, data } = await fetchBlock(args, {
        client: this.client,
        queue: this.queue,
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

// example usage of the NotionAPIWrangler class
const client = new Client({
  auth: process.env.NOTION_TOKEN,
});
const wrangler = new NotionAPIWrangler(client);
const block = await wrangler.blocks.children.list({
  block_id: '7ed3a6eebb5e4cdfa94433684d7c56bf',
});
console.log(block);
