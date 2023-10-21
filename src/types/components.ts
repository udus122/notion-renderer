import type { IdRequest } from "./notion.js";
import type { Overwrite } from "./utils.js";
import type { ArticleData } from "@extractus/article-extractor";
import type {
  LinkTypeData,
  PhotoTypeData,
  RichTypeData,
  VideoTypeData,
} from "@extractus/oembed-extractor";
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

export type BlockObject =
  | AudioBlockObject
  | BookmarkBlockObject
  | BreadcrumbBlockObject
  | BulletedListBlockObject
  | BulletedListItemBlockObject
  | CalloutBlockObject
  | ChildDatabaseBlockObject
  | ChildPageBlockObject
  | CodeBlockObject
  | ColumnBlockObject
  | ColumnListBlockObject
  | DividerBlockObject
  | EmbedBlockObject
  | EquationBlockObject
  | FileBlockObject
  | Heading1BlockObject
  | Heading2BlockObject
  | Heading3BlockObject
  | NumberedListBlockObject
  | NumberedListItemBlockObject
  | ImageBlockObject
  | LinkPreviewBlockObject
  | LinkToPageBlockObject
  | ParagraphBlockObject
  | PdfBlockObject
  | QuoteBlockObject
  | SyncedBlockBlockObject
  | TableBlockObject
  | TableOfContentsBlockObject
  | TableRowBlockObject
  | TemplateBlockObject
  | ToDoBlockObject
  | ToggleBlockObject
  | UnsupportedBlockObject
  | VideoBlockObject;

export type AudioBlockObject = AudioBlockObjectResponse;

export type BookmarkBlockObject = BookmarkBlockObjectResponse & {
  bookmark: {
    article_data?: ArticleData;
  };
};

export type BreadcrumbBlockObject = Overwrite<
  BreadcrumbBlockObjectResponse,
  {
    breadcrumb: {
      parents: Array<PageObjectResponse | DatabaseObjectResponse>;
    };
  }
>;

export type BulletedListBlockObject = {
  id: string;
  type: "bulleted_list";
  bulleted_list: {
    items: Array<BulletedListItemBlockObject>;
  };
};

export type BulletedListItemBlockObject =
  BulletedListItemBlockObjectResponse & {
    bulleted_list_item: {
      children?: Array<BlockObject>;
    };
  };

export type CalloutBlockObject = CalloutBlockObjectResponse & {
  callout: { children?: Array<BlockObject> };
};

export type ChildDatabaseBlockObject = ChildDatabaseBlockObjectResponse & {
  child_database: {
    database?: DatabaseObjectResponse | null;
  };
};

export type ChildPageBlockObject = ChildPageBlockObjectResponse & {
  child_page: {
    page?: PageObjectResponse;
  };
};

export type CodeBlockObject = CodeBlockObjectResponse;

export type ColumnBlockObject = Overwrite<
  ColumnBlockObjectResponse,
  {
    column: { children?: Array<BlockObject> };
  }
>;

export type ColumnListBlockObject = Overwrite<
  ColumnListBlockObjectResponse,
  {
    column_list: {
      columns?: Array<ColumnBlockObject>;
    };
  }
>;

export type DividerBlockObject = DividerBlockObjectResponse;

export type EmbedBlockObject = EmbedBlockObjectResponse & {
  embed: {
    oembed?: LinkTypeData | PhotoTypeData | VideoTypeData | RichTypeData;
  };
};

export type EquationBlockObject = EquationBlockObjectResponse;

export type FileBlockObject = FileBlockObjectResponse;

export type Heading1BlockObject = Heading1BlockObjectResponse & {
  heading_1: { children?: Array<BlockObject> };
};

export type Heading2BlockObject = Heading2BlockObjectResponse & {
  heading_2: { children?: Array<BlockObject> };
};

export type Heading3BlockObject = Heading3BlockObjectResponse & {
  heading_3: { children?: Array<BlockObject> };
};

export type ImageBlockObject = ImageBlockObjectResponse;

export type LinkPreviewBlockObject = LinkPreviewBlockObjectResponse & {
  link_preview: {
    article_data?: ArticleData;
  };
};

export type LinkToPageBlockObject = LinkToPageBlockObjectResponse & {
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

export type NumberedListBlockObject = {
  id: string;
  numbered_list: { items: Array<NumberedListItemBlockObject> };
  type: "numbered_list";
};

export type NumberedListItemBlockObject =
  NumberedListItemBlockObjectResponse & {
    numbered_list_item: { children?: Array<BlockObject> };
  };

export type ParagraphBlockObject = ParagraphBlockObjectResponse & {
  paragraph: { children?: Array<BlockObject> };
};

export type PdfBlockObject = PdfBlockObjectResponse;

export type QuoteBlockObject = QuoteBlockObjectResponse & {
  quote: { children?: Array<BlockObject> };
};

export type SyncedBlockBlockObject = SyncedBlockBlockObjectResponse & {
  synced_block: {
    synced_from: {
      type: "block_id";
      block_id: IdRequest;
      block?: BlockObject | null;
    } | null;
    children?: Array<BlockObject> | null;
  };
};

export type TableBlockObject = TableBlockObjectResponse & {
  table: { table_rows?: Array<TableRowBlockObject> };
};

export type TableOfContentsBlockObject = TableOfContentsBlockObjectResponse;

export type TableRowBlockObject = TableRowBlockObjectResponse;

export type TableCellBlockObjectComponent =
  TableRowBlockObject["table_row"]["cells"][number];

export type TemplateBlockObject = TemplateBlockObjectResponse;

export type ToDoBlockObject = ToDoBlockObjectResponse & {
  to_do: { children?: Array<BlockObject> };
};

export type ToggleBlockObject = ToggleBlockObjectResponse & {
  toggle: { children?: Array<BlockObject> };
};

export type TogglableBlockObjectComponent =
  | ToggleBlockObject
  | Heading1BlockObject
  | Heading2BlockObject
  | Heading3BlockObject;

export type UnsupportedBlockObject = UnsupportedBlockObjectResponse;

export type VideoBlockObject = VideoBlockObjectResponse & {
  video: {
    oembed?: LinkTypeData | PhotoTypeData | VideoTypeData | RichTypeData;
  };
};
