import {
  isNotionClientError,
  APIErrorCode,
  ClientErrorCode,
} from '@notionhq/client';

import { exponentialBackoffFactory } from './backoff';

const createWithBackOff = (
  initialDelay = 1,
  factor = 2,
  maxDelay = 300,
  retryCount = 3,
) => {
  const exponentialBackoff = exponentialBackoffFactory(
    initialDelay,
    factor,
    maxDelay,
  );

  return <Args, Return>(func: (args: Args) => Promise<Return>) => {
    const callAPIWithBackOff = async (
      args: Args,
      currentRetryCount = retryCount,
    ): Promise<Return> => {
      try {
        const data = await func({ ...args });
        return data;
      } catch (error) {
        console.error(
          `error occurred with this parameter: ${JSON.stringify({
            func: func.name,
            args,
            error,
          })}`,
        );
        if (isNotionClientError(error)) {
          switch (error.code) {
            case APIErrorCode.RateLimited:
            case APIErrorCode.ConflictError:
            case APIErrorCode.InternalServerError:
            case APIErrorCode.ServiceUnavailable:
            case ClientErrorCode.ResponseError:
            case ClientErrorCode.RequestTimeout: {
              console.info('start retrying...');
              if (currentRetryCount < 1) {
                throw new Error('retry count exceeded.', { cause: error });
              }
              await exponentialBackoff();
              const newRetryCount = currentRetryCount - 1;
              const data = await callAPIWithBackOff(args, newRetryCount);
              return data;
            }
            default:
              break;
          }
        }
      }
      throw new Error('Notion api call was failed with unknown error.');
    };

    return async (args: Args): Promise<Return> => {
      return callAPIWithBackOff(args);
    };
  };
};

export const withBackOff = createWithBackOff(1, 2, 300, 3);
