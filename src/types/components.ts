import type { Overwrite } from "./utils";
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

export type ListBlockChildrenResponseResults =
  ListBlockChildrenResponse["results"];

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

export type OgMeta = {
  title?: string;
  desc?: string;
  image?: OgpImage;
  icon?: string;
};

export type OgpImage = {
  url: string;
  type?: string;
  width?: number;
  height?: number;
};

export type BookmarkBlockObjectComponent = BookmarkBlockObjectResponse & {
  bookmark: {
    og_meta?: OgMeta;
  };
};

export type BreadcrumbBlockObjectComponent = BreadcrumbBlockObjectResponse;

export type BulletedListBlockObjectComponent = {
  id: string;
  // items: Array<BulletedListItemBlockObjectComponent>;
  type: "bulleted_list";
  bulleted_list: {
    items: Array<BulletedListItemBlockObjectComponent>;
  };
};

export type BulletedListItemBlockObjectComponent =
  BulletedListItemBlockObjectResponse & {
    bulleted_list_item: {
      children?: Array<BlockObjectComponent>;
    };
  };

export type CalloutBlockObjectComponent = CalloutBlockObjectResponse & {
  callout: { children?: Array<BlockObjectComponent> };
};

export type ChildDatabaseBlockObjectComponent =
  ChildDatabaseBlockObjectResponse;

export type ChildPageBlockObjectComponent = ChildPageBlockObjectResponse;

export type CodeBlockObjectComponent = CodeBlockObjectResponse;

export type ColumnBlockObjectComponent = ColumnBlockObjectResponse;

export type ColumnListBlockObjectComponent = ColumnListBlockObjectResponse & {
  children?: ListBlockChildrenComponent<ColumnBlockObjectComponent>;
  // NOTE: 本当は、columnsはchildren[number]['children']に入るべき
  columns: Array<ListBlockChildrenComponent>;
};

export type DividerBlockObjectComponent = DividerBlockObjectResponse;

export type EmbedBlockObjectComponent = EmbedBlockObjectResponse;

export type EquationBlockObjectComponent = EquationBlockObjectResponse;

export type FileBlockObjectComponent = FileBlockObjectResponse;

export type Heading1BlockObjectComponent = Heading1BlockObjectResponse & {
  heading_1: { children?: Array<BlockObjectComponent> };
};

export type Heading2BlockObjectComponent = Heading2BlockObjectResponse & {
  heading_2: { children?: Array<BlockObjectComponent> };
};

export type Heading3BlockObjectComponent = Heading3BlockObjectResponse & {
  heading_3: { children?: Array<BlockObjectComponent> };
};

export type ImageBlockObjectComponent = ImageBlockObjectResponse;

export type LinkPreviewBlockObjectComponent = LinkPreviewBlockObjectResponse;

export type LinkToPageBlockObjectComponent = LinkToPageBlockObjectResponse;

export type NumberedListBlockObjectComponent = {
  id: string;
  numbered_list: { items: Array<NumberedListItemBlockObjectComponent> };
  type: "numbered_list";
};

export type NumberedListItemBlockObjectComponent =
  NumberedListItemBlockObjectResponse & {
    numbered_list_item: { children?: Array<BlockObjectComponent> };
  };

export type ParagraphBlockObjectComponent = ParagraphBlockObjectResponse & {
  paragraph: { children?: Array<BlockObjectComponent> };
};

export type PdfBlockObjectComponent = PdfBlockObjectResponse;

export type QuoteBlockObjectComponent = QuoteBlockObjectResponse & {
  quote: { children?: Array<BlockObjectComponent> };
};

export type SyncedBlockBlockObjectComponent = SyncedBlockBlockObjectResponse;

export type TableBlockObjectComponent = TableBlockObjectResponse & {
  children?: Overwrite<
    ListBlockChildrenComponent,
    {
      results: Array<TableRowBlockObjectResponse>;
      children?: Array<BlockObjectComponent>;

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
  to_do: { children?: Array<BlockObjectComponent> };
};

export type ToggleBlockObjectComponent = ToggleBlockObjectResponse & {
  toggle: { children?: Array<BlockObjectComponent> };
};

export type TogglableBlockObjectComponent =
  | ToggleBlockObjectComponent
  | Heading1BlockObjectComponent
  | Heading2BlockObjectComponent
  | Heading3BlockObjectComponent;

export type UnsupportedBlockObjectComponent = UnsupportedBlockObjectResponse;

export type VideoBlockObjectComponent = VideoBlockObjectResponse;
