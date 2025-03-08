import { outputJsonSync, readJsonSync } from 'fs-extra/esm';

import { LRUCache } from 'lru-cache';

import { notUndefined } from '.';

export interface Cache {
  set: (key: string, value: unknown) => void;
  get: (key: string) => unknown | undefined;
  with: <Args, Return>(
    key: string,
    func: (args: Args) => Promise<Return>,
  ) => (args: Args) => Promise<Return>;
}

export interface CacheOptions {
  type?: 'in-memory' | 'local-fs' | 's3';
  maxSize?: number;
  basePath?: string;
}

export class InMemoryCache implements Cache {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  private cache: LRUCache<string, any>;

  constructor(
    maxSize = 1_000_000, // 1MB
  ) {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    this.cache = new LRUCache<string, any>({
      maxSize,
      sizeCalculation: (value, key) => {
        return InMemoryCache.byteSize(key) + InMemoryCache.byteSize(value);
      },
    });
  }

  private static byteSize = (input: unknown): number => {
    const data = typeof input === 'string' ? input : JSON.stringify(input);
    return new Blob([data]).size;
  };

  public set: Cache['set'] = (key: string, value: unknown) => {
    // console.debug(`Cache set for key: ${key}`);
    this.cache.set(key, value);
    // console.debug(`Cache size: ${this.cache.calculatedSize}`);
  };

  public get: Cache['get'] = <T>(key: string) => {
    // console.debug(`Cache hit for key: ${key}`);
    return this.cache.get(key) as T;
  };

  public with: Cache['with'] = <Args, Return>(
    key: string,
    func: (args: Args) => Promise<Return>,
  ) => {
    return async (args: Args): Promise<Return> => {
      const cache = this.get(key) as Return | undefined;
      if (notUndefined(cache)) {
        return cache;
      }
      const result = await func(args);
      this.set(key, result);
      return result;
    };
  };
}

export class LocalFSCache implements Cache {
  constructor(private readonly basePath: string = './.cache') {}

  private path = (key: string) => `${this.basePath}/${key}`;

  public set: Cache['set'] = (key: string, value: unknown) => {
    // console.debug(`Cache set for key: ${key}`);
    outputJsonSync(this.path(key), value);
  };

  public get: Cache['get'] = (key: string) => {
    // console.debug(`Cache hit for key: ${key}`);
    return readJsonSync(this.path(key), { throws: false }) ?? undefined;
  };

  public with: Cache['with'] = <Args, Return>(
    key: string,
    func: (args: Args) => Promise<Return>,
  ) => {
    return async (args: Args): Promise<Return> => {
      const cache = this.get(key) as Return | undefined;
      if (notUndefined(cache)) {
        return cache;
      }
      const result = await func(args);
      this.set(key, result);
      return result;
    };
  };
}
