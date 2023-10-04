import { EmptyObject, ListBlockChildrenResponseEx } from "notionate";

import type {
  AudioBlockObjectResponse,
  BookmarkBlockObjectResponse,
  BreadcrumbBlockObjectResponse,
  BulletedListItemBlockObjectResponse,
  CalloutBlockObjectResponse,
  ChildDatabaseBlockObjectResponse,
  ChildPageBlockObjectResponse,
  CodeBlockObjectResponse,
  ColumnBlockObjectResponse,
  ColumnListBlockObjectResponse,
  DividerBlockObjectResponse,
  EmbedBlockObjectResponse,
  EquationBlockObjectResponse,
  FileBlockObjectResponse,
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
  ImageBlockObjectResponse,
  LinkPreviewBlockObjectResponse,
  LinkToPageBlockObjectResponse,
  ListBlockChildrenResponse,
  NumberedListItemBlockObjectResponse,
  ParagraphBlockObjectResponse,
  PdfBlockObjectResponse,
  QuoteBlockObjectResponse,
  SyncedBlockBlockObjectResponse,
  TableBlockObjectResponse,
  TableOfContentsBlockObjectResponse,
  TableRowBlockObjectResponse,
  TemplateBlockObjectResponse,
  ToDoBlockObjectResponse,
  ToggleBlockObjectResponse,
  UnsupportedBlockObjectResponse,
  VideoBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export type Overwrite<T, U extends { [Key in keyof T]?: unknown }> = Omit<
  T,
  keyof U
> &
  U;

export type BlockComponentProps<T extends ComponentBlockObject> = {
  block: T;
};

export type ComponentBlockObject =
  | AudioComponentBlockObject
  | BookmarkComponentBlockObject
  | BreadcrumbComponentBlockObject
  | BulletedListItemComponentBlockObject
  | CalloutComponentBlockObject
  | ChildDatabaseComponentBlockObject
  | ChildPageComponentBlockObject
  | CodeComponentBlockObject
  | ColumnComponentBlockObject
  | ColumnListComponentBlockObject
  | DividerComponentBlockObject
  | EmbedComponentBlockObject
  | EquationComponentBlockObject
  | FileComponentBlockObject
  | Heading1ComponentBlockObject
  | Heading2ComponentBlockObject
  | Heading3ComponentBlockObject
  | NumberedListItemComponentBlockObject
  | ImageComponentBlockObject
  | LinkPreviewComponentBlockObject
  | LinkToPageComponentBlockObject
  | ParagraphComponentBlockObject
  | PdfComponentBlockObject
  | QuoteComponentBlockObject
  | SyncedBlockComponentBlockObject
  | TableComponentBlockObject
  | TableOfContentsComponentBlockObject
  | TableRowComponentBlockObject
  | TemplateComponentBlockObject
  | ToDoComponentBlockObject
  | ToggleComponentBlockObject
  | UnsupportedComponentBlockObject
  | VideoComponentBlockObject;

export type AudioComponentBlockObject = AudioBlockObjectResponse;

export type BookmarkComponentBlockObject = BookmarkBlockObjectResponse;

export type BreadcrumbComponentBlockObject = BreadcrumbBlockObjectResponse;

export type BulletedListItemComponentBlockObject =
  BulletedListItemBlockObjectResponse;

export type CalloutComponentBlockObject = CalloutBlockObjectResponse & {
  children?: ListBlockChildrenResponseEx;
};

export type ChildDatabaseComponentBlockObject =
  ChildDatabaseBlockObjectResponse;

export type ChildPageComponentBlockObject = ChildPageBlockObjectResponse;

export type CodeComponentBlockObject = CodeBlockObjectResponse & {
  children?: ListBlockChildrenResponseEx;
};

export type ColumnComponentBlockObject = ColumnBlockObjectResponse & {
  children?: ListBlockChildrenResponseEx;
};

export type ColumnListComponentBlockObject = ColumnListBlockObjectResponse & {
  children?: ListBlockChildrenResponseEx;
  columns: Array<ListBlockChildrenResponseEx>;
};

export type DividerComponentBlockObject = DividerBlockObjectResponse;

export type EmbedComponentBlockObject = EmbedBlockObjectResponse;

export type EquationComponentBlockObject = EquationBlockObjectResponse & {
  children?: ListBlockChildrenResponseEx;
};

export type FileComponentBlockObject = FileBlockObjectResponse;

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

export type LinkPreviewComponentBlockObject = LinkPreviewBlockObjectResponse;

export type LinkToPageComponentBlockObject = LinkToPageBlockObjectResponse;

export type NumberedListItemComponentBlockObject =
  NumberedListItemBlockObjectResponse;

export type ParagraphComponentBlockObject = ParagraphBlockObjectResponse & {
  children?: ListBlockChildrenResponseEx;
};

export type PdfComponentBlockObject = PdfBlockObjectResponse;

export type QuoteComponentBlockObject = QuoteBlockObjectResponse & {
  children?: ListBlockChildrenResponseEx;
};

export type SyncedBlockComponentBlockObject = SyncedBlockBlockObjectResponse;

export type TableComponentBlockObject = TableBlockObjectResponse & {
  children?: Overwrite<
    ListBlockChildrenResponse,
    {
      results: Array<TableRowBlockObjectResponse>;
      children?: ListBlockChildrenResponse;
      last_edited_time?: string;
    }
  >;
};

export type TableOfContentsComponentBlockObject =
  TableOfContentsBlockObjectResponse;

export type TableRowComponentBlockObject = TableRowBlockObjectResponse;

export type TableCellComponentBlockObject =
  TableRowComponentBlockObject["table_row"]["cells"][number];

export type TemplateComponentBlockObject = TemplateBlockObjectResponse;

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

export type UnsupportedComponentBlockObject = UnsupportedBlockObjectResponse;

export type VideoComponentBlockObject = VideoBlockObjectResponse;
