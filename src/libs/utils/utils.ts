import { randomUUID, createHash, type BinaryLike } from "node:crypto";
import { existsSync, mkdirSync, type PathLike } from "node:fs";
import { readFile, writeFile, stat } from "node:fs/promises";
import { dirname } from "node:path";

export const notUndefined = <T>(v: T | undefined): v is T =>
  typeof v !== "undefined";

export const notNull = <T>(v: T | null): v is T => v !== null;

export const notNullNorUndefined = <T>(v: T | null | undefined): v is T =>
  notUndefined(v) && notNull(v);

export const generateUUID = (): string => {
  return randomUUID() as string;
};

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
