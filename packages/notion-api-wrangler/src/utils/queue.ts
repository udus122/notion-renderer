import PQueue from 'p-queue';

const createWithQueue = (interval: number, intervalCap: number) => {
  const queue = new PQueue({
    interval,
    intervalCap,
    throwOnTimeout: true,
  });

  return <Args, Return>(func: (args: Args) => Return) => {
    return async (args: Args) => {
      const result = await queue.add(() => func(args), {
        throwOnTimeout: true,
      });
      return result;
    };
  };
};

// Limit Notion API to 3 times per second
// ref. https://developers.notion.com/reference/request-limits#rate-limits
export const withQueue = createWithQueue(1000, 3);
