import { ListBlockChildrenResponseEx } from "notionate";

import type {
  BlockObjectResponse,
  CalloutBlockObjectResponse,
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  ImageBlockObjectResponse,
  ParagraphBlockObjectResponse,
  QuoteBlockObjectResponse,
  ToDoBlockObjectResponse,
  ToggleBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type BlockComponentProps<T extends BlockObjectResponse> = {
  block: T;
};

export type CalloutBlockObjectResponseWithChildren =
  CalloutBlockObjectResponse & {
    children?: ListBlockChildrenResponseEx;
  };

export type Heading1BlockObjectResponseWithChildren =
  Heading1BlockObjectResponse & {
    children?: ListBlockChildrenResponseEx;
  };

export type Heading2BlockObjectResponseWithChildren =
  Heading2BlockObjectResponse & {
    children?: ListBlockChildrenResponseEx;
  };

export type Heading3BlockObjectResponseWithChildren =
  Heading3BlockObjectResponse & {
    children?: ListBlockChildrenResponseEx;
  };

export type ImageBlockObjectResponseWithChildren = ImageBlockObjectResponse & {
  children?: ListBlockChildrenResponseEx;
};

export type ParagraphBlockObjectResponseWithChildren =
  ParagraphBlockObjectResponse & {
    children?: ListBlockChildrenResponseEx;
  };

export type QuoteBlockObjectResponseWithChildren = QuoteBlockObjectResponse & {
  children?: ListBlockChildrenResponseEx;
};

export type ToDoBlockObjectResponseWithChildren = ToDoBlockObjectResponse & {
  children?: ListBlockChildrenResponseEx;
};

export type ToggleBlockObjectResponseWithChildren =
  ToggleBlockObjectResponse & {
    children?: ListBlockChildrenResponseEx;
  };

export type TogglableBlockObjectResponseWithChildren =
  | ToggleBlockObjectResponseWithChildren
  | Heading1BlockObjectResponseWithChildren
  | Heading2BlockObjectResponseWithChildren
  | Heading3BlockObjectResponseWithChildren;
