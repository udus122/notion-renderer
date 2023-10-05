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
  blocks?: ListComponentBlockChildrenResponse;
  customBlockComponentMapper?: object;
};

export type ListComponentBlockChildrenResponse<T = ComponentBlockObject> =
  Overwrite<
    ListBlockChildrenResponse,
    {
      results: Array<T>;
      last_edited_time?: string;
    }
  >;

export type ComponentBlockObject =
  | AudioComponentBlockObject
  | BookmarkComponentBlockObject
  | BreadcrumbComponentBlockObject
  | BulletedListComponentBlockObject
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
  | NumberedListComponentBlockObject
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

export type BulletedListComponentBlockObject = {
  id: string;
  items: Array<BulletedListItemComponentBlockObject>;
  type: "bulleted_list";
};

export type BulletedListItemComponentBlockObject =
  BulletedListItemBlockObjectResponse & {
    children?: ListComponentBlockChildrenResponse;
  };

export type CalloutComponentBlockObject = CalloutBlockObjectResponse & {
  children?: ListComponentBlockChildrenResponse;
};

export type ChildDatabaseComponentBlockObject =
  ChildDatabaseBlockObjectResponse;

export type ChildPageComponentBlockObject = ChildPageBlockObjectResponse;

export type CodeComponentBlockObject = CodeBlockObjectResponse & {
  children?: ListComponentBlockChildrenResponse;
};

export type ColumnComponentBlockObject = ColumnBlockObjectResponse & {
  children?: ListComponentBlockChildrenResponse;
};

export type ColumnListComponentBlockObject = ColumnListBlockObjectResponse & {
  children?: ListComponentBlockChildrenResponse<ColumnComponentBlockObject>;
  // NOTE: 本当は、columnsはchildren[number]['children']に入るべき
  columns: Array<ListComponentBlockChildrenResponse>;
};

export type DividerComponentBlockObject = DividerBlockObjectResponse;

export type EmbedComponentBlockObject = EmbedBlockObjectResponse;

export type EquationComponentBlockObject = EquationBlockObjectResponse & {
  children?: ListComponentBlockChildrenResponse;
};

export type FileComponentBlockObject = FileBlockObjectResponse;

export type Heading1ComponentBlockObject = Heading1BlockObjectResponse & {
  children?: ListComponentBlockChildrenResponse;
};

export type Heading2ComponentBlockObject = Heading2BlockObjectResponse & {
  children?: ListComponentBlockChildrenResponse;
};

export type Heading3ComponentBlockObject = Heading3BlockObjectResponse & {
  children?: ListComponentBlockChildrenResponse;
};

export type ImageComponentBlockObject = ImageBlockObjectResponse & {
  children?: ListComponentBlockChildrenResponse;
};

export type LinkPreviewComponentBlockObject = LinkPreviewBlockObjectResponse;

export type LinkToPageComponentBlockObject = LinkToPageBlockObjectResponse;

export type NumberedListComponentBlockObject = {
  id: string;
  items: Array<NumberedListItemComponentBlockObject>;
  type: "numbered_list";
};

export type NumberedListItemComponentBlockObject =
  NumberedListItemBlockObjectResponse & {
    children?: ListComponentBlockChildrenResponse;
  };

export type ParagraphComponentBlockObject = ParagraphBlockObjectResponse & {
  children?: ListComponentBlockChildrenResponse;
};

export type PdfComponentBlockObject = PdfBlockObjectResponse;

export type QuoteComponentBlockObject = QuoteBlockObjectResponse & {
  children?: ListComponentBlockChildrenResponse;
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
  children?: ListComponentBlockChildrenResponse;
};

export type ToggleComponentBlockObject = ToggleBlockObjectResponse & {
  children?: ListComponentBlockChildrenResponse;
};

export type TogglableComponentBlockObject =
  | ToggleComponentBlockObject
  | Heading1ComponentBlockObject
  | Heading2ComponentBlockObject
  | Heading3ComponentBlockObject;

export type UnsupportedComponentBlockObject = UnsupportedBlockObjectResponse;

export type VideoComponentBlockObject = VideoBlockObjectResponse;
