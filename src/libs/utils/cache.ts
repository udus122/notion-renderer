import { type BinaryLike, createHash } from "node:crypto";
import { type PathLike, existsSync, mkdirSync } from "node:fs";
import { readFile, stat, writeFile } from "node:fs/promises";
import { dirname } from "node:path/posix";

export const hash = (data: BinaryLike): string => {
  const shasum = createHash("md5");
  shasum.update(data);
  return shasum.digest("hex");
};

export const createDirIfNotfound = (path: PathLike): void => {
  if (!existsSync(path)) {
    mkdirSync(path, { recursive: true });
  }
};

export const readCache = async <T>(path: PathLike): Promise<T> => {
  return JSON.parse(await readFile(path, "utf8"));
};

export const writeCache = async (
  file: string,
  data: unknown,
): Promise<void> => {
  createDirIfNotfound(dirname(file));
  writeFile(file, JSON.stringify(data), "utf8");
};

export const isAvailableCache = async (
  path: PathLike,
  seconds: number,
): Promise<boolean> => {
  const t = new Date(Date.now() + seconds * 1000);
  const stats = await stat(path);
  return stats.mtime < t;
};

export const withCache = <Args, Item>(
  func: (args: Args) => Promise<Item>,
  cacheDir: string = ".cache",
): ((args: Args) => Promise<Item>) => {
  const funcWithCache = async (args: Args): Promise<Item> => {
    const key = hash(JSON.stringify({ func: func.name, args }));
    const cachePath = `${cacheDir}/${key}`;

    try {
      if (await isAvailableCache(cachePath, 600)) {
        const cache = await readCache<Item>(cachePath);
        return cache;
      }
    } catch (_) {
      /* not fatal */
    }

    const res = await func({ ...args });
    await writeCache(cachePath, res);
    return res;
  };

  return funcWithCache;
};
