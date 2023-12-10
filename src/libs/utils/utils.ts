import { randomUUID } from "node:crypto";

export const notNullNorUndefined = <T>(v: T | null | undefined): v is T => {
  return v !== null && v !== undefined;
};

export const generateUUID = (): string => {
  return randomUUID() as string;
};
