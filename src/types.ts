import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type BlockComponentProps<T extends BlockObjectResponse> = {
  block: T;
};
