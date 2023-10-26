import type { Overwrite } from "./utils.js";
import type { ArticleData } from "@extractus/article-extractor";
import type {
  LinkTypeData,
  PhotoTypeData,
  VideoTypeData,
  RichTypeData,
} from "@extractus/oembed-extractor";
import type {
  RichTextItemResponse,
  ListBlockChildrenResponse,
  AudioBlockObjectResponse,
  BookmarkBlockObjectResponse,
  BreadcrumbBlockObjectResponse,
  PageObjectResponse,
  DatabaseObjectResponse,
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
  NumberedListItemBlockObjectResponse,
  ParagraphBlockObjectResponse,
  PdfBlockObjectResponse,
  QuoteBlockObjectResponse,
  SyncedBlockBlockObjectResponse,
  TableRowBlockObjectResponse,
  LinkToPageBlockObjectResponse,
  ListCommentsResponse,
  TableOfContentsBlockObjectResponse,
  TemplateBlockObjectResponse,
  ToggleBlockObjectResponse,
  UnsupportedBlockObjectResponse,
  VideoBlockObjectResponse,
  EquationRichTextItemResponse,
  TableBlockObjectResponse,
  ToDoBlockObjectResponse,
  MentionRichTextItemResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints.js";

export type AnnotationType = RichTextItemResponse["annotations"];

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
export type AudioBlockObject = Overwrite<
  AudioBlockObjectResponse,
  {
    audio:
      | {
          type: "external";
          external: {
            url: TextRequest;
          };
          caption: Array<RichTextItem>;
        }
      | {
          type: "file";
          file: {
            url: string;
            expiry_time: string;
          };
          caption: Array<RichTextItem>;
        };
  }
>;
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
export type BookmarkBlockObject = BookmarkBlockObjectResponse & {
  bookmark: {
    site_meta?: ArticleData;
    caption: Array<RichTextItem>;
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
      rich_text: Array<RichTextItem>;
      children?: Array<BlockObject>;
    };
  };
export type CalloutBlockObject = CalloutBlockObjectResponse & {
  callout: { rich_text: Array<RichTextItem>; children?: Array<BlockObject> };
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
export type CodeBlockObject = Overwrite<
  CodeBlockObjectResponse,
  {
    code: {
      language: string;
      rich_text: Array<RichTextItem>;
      caption: Array<RichTextItem>;
    };
  }
>;
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
    caption: Array<RichTextItem>;
    oembed?: LinkTypeData | PhotoTypeData | VideoTypeData | RichTypeData;
  };
};
export type EquationBlockObject = EquationBlockObjectResponse & {
  equation: {
    expression: string;
  };
};
export type FileBlockObject = FileBlockObjectResponse & {
  file: {
    caption: Array<RichTextItem>;
  };
};
export type Heading1BlockObject = Heading1BlockObjectResponse & {
  heading_1: { rich_text: Array<RichTextItem>; children?: Array<BlockObject> };
};
export type Heading2BlockObject = Heading2BlockObjectResponse & {
  heading_2: { rich_text: Array<RichTextItem>; children?: Array<BlockObject> };
};
export type Heading3BlockObject = Heading3BlockObjectResponse & {
  heading_3: { rich_text: Array<RichTextItem>; children?: Array<BlockObject> };
};
export type ImageBlockObject = Overwrite<
  ImageBlockObjectResponse,
  {
    image:
      | {
          type: "external";
          external: {
            url: TextRequest;
          };
          caption: Array<RichTextItem>;
        }
      | {
          type: "file";
          file: {
            url: string;
            expiry_time: string;
          };
          caption: Array<RichTextItem>;
        };
  }
>;
export type LinkPreviewBlockObject = LinkPreviewBlockObjectResponse & {
  link_preview: {
    site_meta?: ArticleData;
  };
};
export type GgNumberedListBlockObject = {
  id: string;
  numbered_list: { items: Array<NumberedListItemBlockObject> };
  type: "numbered_list";
};
export type NumberedListItemBlockObject =
  NumberedListItemBlockObjectResponse & {
    numbered_list_item: { children?: Array<BlockObject> };
  };
export type ParagraphBlockObject = ParagraphBlockObjectResponse & {
  paragraph: { rich_text: Array<RichTextItem>; children?: Array<BlockObject> };
};
export type PdfBlockObject = Overwrite<
  PdfBlockObjectResponse,
  {
    pdf:
      | {
          type: "external";
          external: {
            url: TextRequest;
          };
          caption: Array<RichTextItem>;
        }
      | {
          type: "file";
          file: {
            url: string;
            expiry_time: string;
          };
          caption: Array<RichTextItem>;
        };
  }
>;
export type QuoteBlockObject = QuoteBlockObjectResponse & {
  quote: { rich_text: Array<RichTextItem>; children?: Array<BlockObject> };
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
export type TableRowBlockObject = TableRowBlockObjectResponse & {
  table_row: {
    cells: Array<Array<RichTextItem>>;
  };
};
export type TableCellBlockObjectComponent =
  TableRowBlockObject["table_row"]["cells"][number];
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
export type TableOfContentsBlockObject = TableOfContentsBlockObjectResponse;
export type TemplateBlockObject = TemplateBlockObjectResponse;
export type ToggleBlockObject = ToggleBlockObjectResponse & {
  toggle: { rich_text: Array<RichTextItem>; children?: Array<BlockObject> };
};
export type UnsupportedBlockObject = UnsupportedBlockObjectResponse;
export type VideoBlockObject = Overwrite<
  VideoBlockObjectResponse,
  {
    video:
      | {
          type: "external";
          external: {
            url: TextRequest;
          };
          caption: Array<RichTextItem>;
          oembed?: LinkTypeData | PhotoTypeData | VideoTypeData | RichTypeData;
        }
      | {
          type: "file";
          file: {
            url: string;
            expiry_time: string;
          };
          caption: Array<RichTextItem>;
        };
  }
>;
export type EquationRichTextItem = EquationRichTextItemResponse & {
  id?: string;
};
export type MentionObject =
  | UserMentionObject
  | DateMentionObject
  | LinkPreviewMentionObject
  | TempateMentionMentionObject
  | PageMentionObject
  | DatabaseMentionObject;
export type TableBlockObject = TableBlockObjectResponse & {
  table: { table_rows?: Array<TableRowBlockObject> };
};
export type ToDoBlockObject = ToDoBlockObjectResponse & {
  to_do: { rich_text: Array<RichTextItem>; children?: Array<BlockObject> };
};
export type NumberedListBlockObject = {
  id: string;
  numbered_list: { items: Array<NumberedListItemBlockObject> };
  type: "numbered_list";
};
export type MentionObjectResponse = MentionRichTextItemResponse["mention"];
export type UserMentionObjectResponse = Extract<
  MentionObjectResponse,
  { type: "user" }
>;
export type DateMentionObjectResponse = Extract<
  MentionObjectResponse,
  {
    type: "date";
  }
>;
export type LinkPreviewMentionObjectResponse = Extract<
  MentionObjectResponse,
  {
    type: "link_preview";
  }
>;
export type TemplateMentionMentionObjectResponse = Extract<
  MentionObjectResponse,
  {
    type: "template_mention";
  }
>;
export type PageMentionObjectResponse = Extract<
  MentionObjectResponse,
  {
    type: "page";
  }
>;
export type DatabaseMentionObjectResponse = Extract<
  MentionObjectResponse,
  {
    type: "database";
  }
>;
export type UserMentionObject = UserMentionObjectResponse;
export type DateMentionObject = DateMentionObjectResponse;
export type LinkPreviewMentionObject = LinkPreviewMentionObjectResponse & {
  link_preview: { site_meta?: ArticleData };
};
export type TempateMentionMentionObject = TemplateMentionMentionObjectResponse;
export type PageMentionObject = PageMentionObjectResponse & {
  page: { page?: PageObjectResponse };
};
export type DatabaseMentionObject = DatabaseMentionObjectResponse & {
  database: { database?: DatabaseObjectResponse };
};
export type RichTextItem =
  | TextRichTextItem
  | EquationRichTextItem
  | MentionRichTextItem;
export type TextRichTextItem = TextRichTextItemResponse & {
  id?: string;
};
export type MentionRichTextItem = Overwrite<
  MentionRichTextItemResponse,
  {
    mention: MentionObject;
  }
> & { id?: string };
