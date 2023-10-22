import type { VideoBlockObject } from "src/libs/notion/blocks/video.js";
import type { AudioBlockObject } from "../libs/notion/blocks/audio.js";
import type { BookmarkBlockObject } from "src/libs/notion/blocks/bookmark.js";
import type { BreadcrumbBlockObject } from "src/libs/notion/blocks/breadcrumb.js";
import type {
  BulletedListBlockObject,
  BulletedListItemBlockObject,
} from "src/libs/notion/blocks/bulletedListItem.js";
import type { CalloutBlockObject } from "src/libs/notion/blocks/callout.js";
import type { ChildDatabaseBlockObject } from "src/libs/notion/blocks/childDatabase.js";
import type { ChildPageBlockObject } from "src/libs/notion/blocks/childPage.js";
import type { CodeBlockObject } from "src/libs/notion/blocks/code.js";
import type { ColumnBlockObject } from "src/libs/notion/blocks/column.js";
import type { ColumnListBlockObject } from "src/libs/notion/blocks/columnList.js";
import type { DividerBlockObject } from "src/libs/notion/blocks/divider.js";
import type { EmbedBlockObject } from "src/libs/notion/blocks/embed.js";
import type { EquationBlockObject } from "src/libs/notion/blocks/equation.js";
import type { FileBlockObject } from "src/libs/notion/blocks/file.js";
import type { Heading1BlockObject } from "src/libs/notion/blocks/heading1.js";
import type { Heading2BlockObject } from "src/libs/notion/blocks/heading2.js";
import type { Heading3BlockObject } from "src/libs/notion/blocks/heading3.js";
import type { ImageBlockObject } from "src/libs/notion/blocks/image.js";
import type { LinkPreviewBlockObject } from "src/libs/notion/blocks/linkPreview.js";
import type { LinkToPageBlockObject } from "src/libs/notion/blocks/linkToPage.js";
import type {
  NumberedListBlockObject,
  NumberedListItemBlockObject,
} from "src/libs/notion/blocks/numberedListItem.js";
import type { ParagraphBlockObject } from "src/libs/notion/blocks/paragraph.js";
import type { PdfBlockObject } from "src/libs/notion/blocks/pdf.js";
import type { QuoteBlockObject } from "src/libs/notion/blocks/quote.js";
import type { SyncedBlockBlockObject } from "src/libs/notion/blocks/syncedBlock.js";
import type { TableBlockObject } from "src/libs/notion/blocks/table.js";
import type { TableRowBlockObject } from "src/libs/notion/blocks/table_row.js";
import type { TableOfContentsBlockObject } from "src/libs/notion/blocks/tableOfContents.js";
import type { TemplateBlockObject } from "src/libs/notion/blocks/template.js";
import type { ToDoBlockObject } from "src/libs/notion/blocks/toDo.js";
import type { ToggleBlockObject } from "src/libs/notion/blocks/toggle.js";
import type { UnsupportedBlockObject } from "src/libs/notion/blocks/unsupported.js";

export * from "./Blocks/Blocks.js";
export * from "./RichText/RichText.js";

export * from "./Link.js";

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

export type TogglableBlockObjectComponent =
  | ToggleBlockObject
  | Heading1BlockObject
  | Heading2BlockObject
  | Heading3BlockObject;
