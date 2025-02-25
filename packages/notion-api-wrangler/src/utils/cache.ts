import { LRUCache } from 'lru-cache';

const byteSize = (input: unknown): number => {
  const data = typeof input === 'string' ? input : JSON.stringify(input);
  return new Blob([data]).size;
};

export const createWithCache = (maxSize: number) => {
  const cache = new LRUCache({
    maxSize,
    sizeCalculation: (value, key) => {
      return byteSize(key) + byteSize(value);
    },
  });

  return <Args, Return>(key: string, func: (args: Args) => Return) => {
    return async (args: Args): Promise<Return> => {
      if (cache.has(key)) {
        return cache.get(key) as Return;
      }
      const result = await func(args);
      // @ts-expect-error: TS doesn't know that `result` is the correct type
      cache.set(key, result);
      return result;
    };
  };
};

export const withCache = createWithCache(1000);
