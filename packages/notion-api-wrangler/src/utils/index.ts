import { randomUUID } from "node:crypto";

export const notUndefined = <T>(v: T | undefined): v is T =>
  typeof v !== "undefined";

export const notNull = <T>(v: T | null): v is T => v !== null;

export const notNullNorUndefined = <T>(v: T | null | undefined): v is T =>
  notUndefined(v) && notNull(v);

export const generateUUID = (): string => {
  return randomUUID() as string;
};
