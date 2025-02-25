import PQueue from 'p-queue';

export interface Queue {
  add: <Return>(func: () => Promise<Return>) => Promise<Return>;
}

export interface QueueOptions {
  interval: number;
  intervalCap: number;
}

export class NotionApiQueue implements Queue {
  private queue: PQueue;

  /**
   * @param interval The length of time in milliseconds before the interval count resets. Must be finite.
   * @param intervalCap The max number of runs in the given interval of time.
   *
   * By default, it is set to 3 times per second to comply with the Notion API rules.
   * @see https://developers.notion.com/reference/request-limits#rate-limits
   */
  constructor(
    { interval, intervalCap }: QueueOptions = {
      interval: 1000,
      intervalCap: 3,
    },
  ) {
    this.queue = new PQueue({
      interval,
      intervalCap,
      throwOnTimeout: true,
    });
  }

  public add: Queue['add'] = async (func) => {
    const result = await this.queue.add(func, {
      throwOnTimeout: true,
    });
    return result;
  };
}
