import type { AudioBlockObject } from "./Blocks/Audio.js";
import type { BookmarkBlockObject } from "./Blocks/Bookmark.js";
import type { BreadcrumbBlockObject } from "./Blocks/Breadcrumb.js";
import type { BulletedListBlockObject } from "./Blocks/BulletedList.js";
import type { BulletedListItemBlockObject } from "./Blocks/BulletedListItem.js";
import type { CalloutBlockObject } from "./Blocks/Callout.js";
import type { ChildDatabaseBlockObject } from "./Blocks/ChildDatabase.js";
import type { ChildPageBlockObject } from "./Blocks/ChildPage.js";
import type { CodeBlockObject } from "./Blocks/Code.js";
import type {
  ColumnBlockObject,
  ColumnListBlockObject,
} from "./Blocks/ColumnList.js";
import type { DividerBlockObject } from "./Blocks/Divider.js";
import type { EmbedBlockObject } from "./Blocks/Embed.js";
import type { EquationBlockObject } from "./Blocks/Equation.js";
import type { FileBlockObject } from "./Blocks/File.js";
import type { Heading1BlockObject } from "./Blocks/Heading1.js";
import type { Heading2BlockObject } from "./Blocks/Heading2.js";
import type { Heading3BlockObject } from "./Blocks/Heading3.js";
import type { ImageBlockObject } from "./Blocks/Image.js";
import type { LinkPreviewBlockObject } from "./Blocks/LinkPreview.js";
import type { LinkToPageBlockObject } from "./Blocks/LinkToPage.js";
import type { NumberedListBlockObject } from "./Blocks/NumberedList.js";
import type { NumberedListItemBlockObject } from "./Blocks/NumberedListItem.js";
import type { ParagraphBlockObject } from "./Blocks/Paragraph.js";
import type { PdfBlockObject } from "./Blocks/Pdf.js";
import type { QuoteBlockObject } from "./Blocks/Quote.js";
import type { SyncedBlockBlockObject } from "./Blocks/SyncedBlock.js";
import type { TableBlockObject, TableRowBlockObject } from "./Blocks/Table.js";
import type { TableOfContentsBlockObject } from "./Blocks/TableOfContents.js";
import type { TemplateBlockObject } from "./Blocks/Template.js";
import type { ToDoBlockObject } from "./Blocks/ToDo.js";
import type { ToggleBlockObject } from "./Blocks/Toggle.js";
import type { UnsupportedBlockObject } from "./Blocks/Unsupported.js";
import type { VideoBlockObject } from "./Blocks/Video.js";

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
