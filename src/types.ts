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

export type BlockComponentProps<T extends BlockObjectComponent> = {
  block: T;
  blocks?: ListBlockChildrenComponent;
  customBlockComponentMapper?: object;
};

export type ListBlockChildrenComponent<T = BlockObjectComponent> = Overwrite<
  ListBlockChildrenResponse,
  {
    results: Array<T>;
    last_edited_time?: string;
  }
>;

export type BlockObjectComponent =
  | AudioBlockObjectComponent
  | BookmarkBlockObjectComponent
  | BreadcrumbBlockObjectComponent
  | BulletedListBlockObjectComponent
  | BulletedListItemBlockObjectComponent
  | CalloutBlockObjectComponent
  | ChildDatabaseBlockObjectComponent
  | ChildPageBlockObjectComponent
  | CodeBlockObjectComponent
  | ColumnBlockObjectComponent
  | ColumnListBlockObjectComponent
  | DividerBlockObjectComponent
  | EmbedBlockObjectComponent
  | EquationBlockObjectComponent
  | FileBlockObjectComponent
  | Heading1BlockObjectComponent
  | Heading2BlockObjectComponent
  | Heading3BlockObjectComponent
  | NumberedListBlockObjectComponent
  | NumberedListItemBlockObjectComponent
  | ImageBlockObjectComponent
  | LinkPreviewBlockObjectComponent
  | LinkToPageBlockObjectComponent
  | ParagraphBlockObjectComponent
  | PdfBlockObjectComponent
  | QuoteBlockObjectComponent
  | SyncedBlockBlockObjectComponent
  | TableBlockObjectComponent
  | TableOfContentsBlockObjectComponent
  | TableRowBlockObjectComponent
  | TemplateBlockObjectComponent
  | ToDoBlockObjectComponent
  | ToggleBlockObjectComponent
  | UnsupportedBlockObjectComponent
  | VideoBlockObjectComponent;

export type AudioBlockObjectComponent = AudioBlockObjectResponse;

export type BookmarkBlockObjectComponent = BookmarkBlockObjectResponse;

export type BreadcrumbBlockObjectComponent = BreadcrumbBlockObjectResponse;

export type BulletedListBlockObjectComponent = {
  id: string;
  items: Array<BulletedListItemBlockObjectComponent>;
  type: "bulleted_list";
};

export type BulletedListItemBlockObjectComponent =
  BulletedListItemBlockObjectResponse & {
    children?: ListBlockChildrenComponent;
  };

export type CalloutBlockObjectComponent = CalloutBlockObjectResponse & {
  children?: ListBlockChildrenComponent;
};

export type ChildDatabaseBlockObjectComponent =
  ChildDatabaseBlockObjectResponse;

export type ChildPageBlockObjectComponent = ChildPageBlockObjectResponse;

export type CodeBlockObjectComponent = CodeBlockObjectResponse & {
  children?: ListBlockChildrenComponent;
};

export type ColumnBlockObjectComponent = ColumnBlockObjectResponse & {
  children?: ListBlockChildrenComponent;
};

export type ColumnListBlockObjectComponent = ColumnListBlockObjectResponse & {
  children?: ListBlockChildrenComponent<ColumnBlockObjectComponent>;
  // NOTE: 本当は、columnsはchildren[number]['children']に入るべき
  columns: Array<ListBlockChildrenComponent>;
};

export type DividerBlockObjectComponent = DividerBlockObjectResponse;

export type EmbedBlockObjectComponent = EmbedBlockObjectResponse;

export type EquationBlockObjectComponent = EquationBlockObjectResponse & {
  children?: ListBlockChildrenComponent;
};

export type FileBlockObjectComponent = FileBlockObjectResponse;

export type Heading1BlockObjectComponent = Heading1BlockObjectResponse & {
  children?: ListBlockChildrenComponent;
};

export type Heading2BlockObjectComponent = Heading2BlockObjectResponse & {
  children?: ListBlockChildrenComponent;
};

export type Heading3BlockObjectComponent = Heading3BlockObjectResponse & {
  children?: ListBlockChildrenComponent;
};

export type ImageBlockObjectComponent = ImageBlockObjectResponse & {
  children?: ListBlockChildrenComponent;
};

export type LinkPreviewBlockObjectComponent = LinkPreviewBlockObjectResponse;

export type LinkToPageBlockObjectComponent = LinkToPageBlockObjectResponse;

export type NumberedListBlockObjectComponent = {
  id: string;
  items: Array<NumberedListItemBlockObjectComponent>;
  type: "numbered_list";
};

export type NumberedListItemBlockObjectComponent =
  NumberedListItemBlockObjectResponse & {
    children?: ListBlockChildrenComponent;
  };

export type ParagraphBlockObjectComponent = ParagraphBlockObjectResponse & {
  children?: ListBlockChildrenComponent;
};

export type PdfBlockObjectComponent = PdfBlockObjectResponse;

export type QuoteBlockObjectComponent = QuoteBlockObjectResponse & {
  children?: ListBlockChildrenComponent;
};

export type SyncedBlockBlockObjectComponent = SyncedBlockBlockObjectResponse;

export type TableBlockObjectComponent = TableBlockObjectResponse & {
  children?: Overwrite<
    ListBlockChildrenComponent,
    {
      results: Array<TableRowBlockObjectResponse>;
      children?: ListBlockChildrenComponent;
      last_edited_time?: string;
    }
  >;
};

export type TableOfContentsBlockObjectComponent =
  TableOfContentsBlockObjectResponse;

export type TableRowBlockObjectComponent = TableRowBlockObjectResponse;

export type TableCellBlockObjectComponent =
  TableRowBlockObjectComponent["table_row"]["cells"][number];

export type TemplateBlockObjectComponent = TemplateBlockObjectResponse;

export type ToDoBlockObjectComponent = ToDoBlockObjectResponse & {
  children?: ListBlockChildrenComponent;
};

export type ToggleBlockObjectComponent = ToggleBlockObjectResponse & {
  children?: ListBlockChildrenComponent;
};

export type TogglableBlockObjectComponent =
  | ToggleBlockObjectComponent
  | Heading1BlockObjectComponent
  | Heading2BlockObjectComponent
  | Heading3BlockObjectComponent;

export type UnsupportedBlockObjectComponent = UnsupportedBlockObjectResponse;

export type VideoBlockObjectComponent = VideoBlockObjectResponse;
