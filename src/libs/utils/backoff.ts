export const exponentialBackoffFactory = (
  initialDelay: number = 1,
  factor: number = 2,
  maxDelay: number = 10,
): (() => Promise<void>) => {
  let currentDelay: number = initialDelay;

  return async (): Promise<void> => {
    await new Promise<void>((resolve) =>
      setTimeout(resolve, currentDelay * 1000),
    );
    currentDelay = Math.min(currentDelay * factor, maxDelay);
  };
};
