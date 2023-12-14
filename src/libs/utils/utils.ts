import { randomUUID, createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { readFile, writeFile, stat, mkdir } from "node:fs/promises";

export const notUndefined = <T>(v: T | undefined): v is T =>
  typeof v !== "undefined";

export const notNull = <T>(v: T | null): v is T => v !== null;

export const notNullNorUndefined = <T>(v: T | null | undefined): v is T =>
  notUndefined(v) && notNull(v);

export const generateUUID = (): string => {
  return randomUUID() as string;
};

export const hash = (a: string): string => {
  const shasum = createHash("sha1");
  shasum.update(a);
  return shasum.digest("hex");
};

export const createDirWhenNotfound = async (dir: string): Promise<void> => {
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true });
    console.log(`created direcotry: ${dir}`);
  }
};

export const readCache = async <T>(f: string): Promise<T> => {
  return JSON.parse(await readFile(f, "utf8"));
};

export const writeCache = async (f: string, data: unknown): Promise<void> => {
  return writeFile(f, JSON.stringify(data), "utf8").catch(() => {});
};

export const isAvailableCache = async (
  f: string,
  seconds: number,
): Promise<boolean> => {
  const t = new Date(Date.now() + seconds * 1000);
  const stats = await stat(f);
  return stats.mtime < t;
};
