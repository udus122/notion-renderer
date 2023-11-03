export type Overwrite<T, U extends { [Key in keyof T]?: unknown }> = Omit<
  T,
  keyof U
> &
  U;

export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

export type Result<T, E extends Error = Error> =
  | {
      payload: T;
      error?: undefined;
    }
  | {
      payload?: undefined;
      error: E;
    };
