import { ListBlockChildrenResponseEx } from "notionate";

import type {
  CalloutBlockObjectResponse,
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  ImageBlockObjectResponse,
  ParagraphBlockObjectResponse,
  QuoteBlockObjectResponse,
  TableBlockObjectResponse,
  TableRowBlockObjectResponse,
  ToDoBlockObjectResponse,
  ToggleBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type BlockComponentProps<T extends ComponentBlockObject> = {
  block: T;
};

export type ComponentBlockObject =
  | CalloutComponentBlockObject
  | Heading1ComponentBlockObject
  | Heading2ComponentBlockObject
  | Heading3ComponentBlockObject
  | ImageComponentBlockObject
  | ParagraphComponentBlockObject
  | QuoteComponentBlockObject
  | TableComponentBlockObject
  | TableRowComponentBlockObject
  | ToDoComponentBlockObject
  | ToggleComponentBlockObject;

export type CalloutComponentBlockObject = CalloutBlockObjectResponse & {
  children?: ListBlockChildrenResponseEx;
};

export type Heading1ComponentBlockObject = Heading1BlockObjectResponse & {
  children?: ListBlockChildrenResponseEx;
};

export type Heading2ComponentBlockObject = Heading2BlockObjectResponse & {
  children?: ListBlockChildrenResponseEx;
};

export type Heading3ComponentBlockObject = Heading3BlockObjectResponse & {
  children?: ListBlockChildrenResponseEx;
};

export type ImageComponentBlockObject = ImageBlockObjectResponse & {
  children?: ListBlockChildrenResponseEx;
};

export type ParagraphComponentBlockObject = ParagraphBlockObjectResponse & {
  children?: ListBlockChildrenResponseEx;
};

export type QuoteComponentBlockObject = QuoteBlockObjectResponse & {
  children?: ListBlockChildrenResponseEx;
};

export type TableComponentBlockObject = TableBlockObjectResponse & {
  children?: ListBlockChildrenResponseEx;
};

export type TableRowComponentBlockObject = TableRowBlockObjectResponse & {
  children?: ListBlockChildrenResponseEx;
};

export type ToDoComponentBlockObject = ToDoBlockObjectResponse & {
  children?: ListBlockChildrenResponseEx;
};

export type ToggleComponentBlockObject = ToggleBlockObjectResponse & {
  children?: ListBlockChildrenResponseEx;
};

export type TogglableComponentBlockObject =
  | ToggleComponentBlockObject
  | Heading1ComponentBlockObject
  | Heading2ComponentBlockObject
  | Heading3ComponentBlockObject;
