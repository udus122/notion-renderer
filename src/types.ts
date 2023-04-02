import type { BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";

export type BlockObject = BlockObjectResponse; // | ListWrapperObject;

export type BlockComponentProps<T extends BlockObject> = {
  block?: T;
  blocks?: BlockObjectResponse[];
  children?: React.ReactNode;
  // mapper?: BlockComponentMapper;
};
