import { randomUUID } from 'node:crypto';

export const notUndefined = <T>(v: T | undefined | void): v is T =>
  typeof v !== 'undefined';

export const notNull = <T>(v: T | null): v is T => v !== null;

export const notNullish = <T>(v: T | null | undefined | void): v is T =>
  notUndefined(v) && notNull(v);

export const generateUUID = (): string => {
  return randomUUID() as string;
};
