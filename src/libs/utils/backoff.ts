export const exponentialBackoffFactory = (
  initialDelay: number = 1,
  factor: number = 2,
  maxDelay: number = Infinity,
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
