import type { Overwrite } from "./utils.js";
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
  DatabaseObjectResponse,
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
  ListCommentsResponse,
  NumberedListItemBlockObjectResponse,
  PageObjectResponse,
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
} from "@notionhq/client/build/src/api-endpoints.js";

export type ListBlockChildrenResponseResults =
  ListBlockChildrenResponse["results"];

export type IdRequest = string | string;

export type EmojiRequest = string;

export type TextRequest = string;

export type Icon =
  | {
      type: "emoji";
      emoji: EmojiRequest;
    }
  | {
      type: "external";
      external: {
        url: TextRequest;
      };
    }
  | {
      type: "file";
      file: {
        url: string;
        expiry_time: string;
      };
    }
  | null;

export type BlockComponentProps<T extends BlockObjectComponent> = {
  block: T;
  blocks?: Array<BlockObjectComponent>;
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

export type SiteInfo = {
  title?: string;
  description?: string;
  image?: OgImage;
  icon?: string;
};

export type OgImage = {
  url: string;
  type?: string;
  width?: number;
  height?: number;
};

export type BookmarkBlockObjectComponent = BookmarkBlockObjectResponse & {
  bookmark: {
    site_info?: SiteInfo;
  };
};

export type BreadcrumbBlockObjectComponent = Overwrite<
  BreadcrumbBlockObjectResponse,
  {
    breadcrumb: {
      parents: Array<PageObjectResponse | DatabaseObjectResponse>;
    };
  }
>;

export type BulletedListBlockObjectComponent = {
  id: string;
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
  ChildDatabaseBlockObjectResponse & {
    child_database: {
      database?: DatabaseObjectResponse;
    };
  };

export type ChildPageBlockObjectComponent = ChildPageBlockObjectResponse & {
  child_page: {
    page?: PageObjectResponse;
  };
};

export type CodeBlockObjectComponent = CodeBlockObjectResponse;

export type ColumnBlockObjectComponent = Overwrite<
  ColumnBlockObjectResponse,
  {
    column: { children?: Array<BlockObjectComponent> };
  }
>;

export type ColumnListBlockObjectComponent = Overwrite<
  ColumnListBlockObjectResponse,
  {
    column_list: {
      columns?: Array<ColumnBlockObjectComponent>;
    };
  }
>;

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

export type LinkPreviewBlockObjectComponent = LinkPreviewBlockObjectResponse & {
  link_preview: {
    site_info?: SiteInfo;
  };
};

export type LinkToPageBlockObjectComponent = LinkToPageBlockObjectResponse & {
  link_to_page:
    | {
        type: "page_id";
        page_id: IdRequest;
        page?: PageObjectResponse;
      }
    | {
        type: "database_id";
        database_id: IdRequest;
        database?: DatabaseObjectResponse;
      }
    | {
        type: "comment_id";
        comment_id: IdRequest;
        comments?: ListCommentsResponse["results"];
      };
};

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

export type SyncedBlockBlockObjectComponent = SyncedBlockBlockObjectResponse & {
  synced_block: {
    synced_from: {
      type: "block_id";
      block_id: IdRequest;
      block?: BlockObjectComponent;
    } | null;
    children?: Array<BlockObjectComponent>;
  };
};

export type TableBlockObjectComponent = TableBlockObjectResponse & {
  table: { table_rows?: Array<TableRowBlockObjectComponent> };
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
