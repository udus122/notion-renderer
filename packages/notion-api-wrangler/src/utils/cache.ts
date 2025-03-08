import { LRUCache } from 'lru-cache';

export interface Cache {
  has: (key: string) => boolean;
  get: (key: string) => unknown | undefined;
  set: (key: string, value: unknown) => void;
  with: <Args, Return>(
    key: string,
    func: (args: Args) => Promise<Return>,
  ) => (args: Args) => Promise<Return>;
}

export interface CacheOptions {
  maxSize: number;
}

export class InMemoryCache implements Cache {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  private cache: LRUCache<string, any>;

  constructor(
    options: CacheOptions = {
      maxSize: 1_000_000, // 1MB
    },
  ) {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    this.cache = new LRUCache<string, any>({
      ...options,
      sizeCalculation: (value, key) => {
        return InMemoryCache.byteSize(key) + InMemoryCache.byteSize(value);
      },
    });
  }

  private static byteSize = (input: unknown): number => {
    const data = typeof input === 'string' ? input : JSON.stringify(input);
    return new Blob([data]).size;
  };

  public has: Cache['has'] = (key: string) => {
    return this.cache.has(key);
  };

  public get: Cache['get'] = <T>(key: string) => {
    console.log(`Cache hit for key: ${key}`);
    return this.cache.get(key) as T;
  };

  public set: Cache['set'] = (key: string, value: unknown) => {
    console.log(`Cache set for key: ${key}`);
    this.cache.set(key, value);
    console.log(`Cache size: ${this.cache.calculatedSize}`);
  };

  public with: Cache['with'] = <Args, Return>(
    key: string,
    func: (args: Args) => Promise<Return>,
  ) => {
    return async (args: Args): Promise<Return> => {
      if (this.has(key)) {
        return this.get(key) as Return;
      }
      const result = await func(args);
      this.set(key, result);
      return result;
    };
  };
}
