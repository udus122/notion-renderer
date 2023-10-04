import { EmptyObject, ListBlockChildrenResponseEx } from "notionate";

import type {
  CalloutBlockObjectResponse,
  CodeBlockObjectResponse,
  EquationBlockObjectResponse,
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  ImageBlockObjectResponse,
  ListBlockChildrenResponse,
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
  | CodeComponentBlockObject
  | EquationComponentBlockObject
  | Heading1ComponentBlockObject
  | Heading2ComponentBlockObject
  | Heading3ComponentBlockObject
  | ImageComponentBlockObject
  | ParagraphComponentBlockObject
  | QuoteComponentBlockObject
  | TableComponentBlockObject
  | ToDoComponentBlockObject
  | ToggleComponentBlockObject;

export type CalloutComponentBlockObject = CalloutBlockObjectResponse & {
  children?: ListBlockChildrenResponseEx;
};

export type CodeComponentBlockObject = CodeBlockObjectResponse & {
  children?: ListBlockChildrenResponseEx;
};

export type EquationComponentBlockObject = EquationBlockObjectResponse & {
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
  children?: {
    type: "block";
    block: EmptyObject;
    object: "list";
    next_cursor: string | null;
    has_more: boolean;
    results: Array<TableRowBlockObjectResponse>;
    children?: ListBlockChildrenResponse;
    last_edited_time?: string;
  };
};

export type TableRowComponentBlockObject = TableRowBlockObjectResponse;

export type TableCellComponentBlockObject =
  TableRowComponentBlockObject["table_row"]["cells"][number];

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
