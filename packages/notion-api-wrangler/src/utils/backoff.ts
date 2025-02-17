export const exponentialBackoffFactory = (
  initialDelay = 1,
  factor = 2,
  maxDelay: number = Number.POSITIVE_INFINITY,
): (() => Promise<void>) => {
  let currentDelay: number = initialDelay;

  return async (): Promise<void> => {
    console.info(`Waiting ${currentDelay} seconds...`);
    await new Promise<void>((resolve) =>
      setTimeout(resolve, currentDelay * 1000),
    );
    currentDelay = Math.min(currentDelay * factor, maxDelay);
  };
};
