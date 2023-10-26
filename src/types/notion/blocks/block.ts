import { type TableBlockObject } from "./table.js";
import { type ToDoBlockObject } from "./toDo.js";

import type { AudioBlockObject } from "./audio.js";
import type { BookmarkBlockObject } from "./bookmark.js";
import type { BreadcrumbBlockObject } from "./breadcrumb.js";
import type { BulletedListBlockObject } from "./bulletedList.js";
import type { BulletedListItemBlockObject } from "./bulletedListItem.js";
import type { CalloutBlockObject } from "./callout.js";
import type { ChildDatabaseBlockObject } from "./childDatabase.js";
import type { ChildPageBlockObject } from "./childPage.js";
import type { CodeBlockObject } from "./code.js";
import type { ColumnBlockObject } from "./column.js";
import type { ColumnListBlockObject } from "./columnList.js";
import type { DividerBlockObject } from "./divider.js";
import type { EmbedBlockObject } from "./embed.js";
import type { EquationBlockObject } from "./equation.js";
import type { FileBlockObject } from "./file.js";
import type { Heading1BlockObject } from "./heading1.js";
import type { Heading2BlockObject } from "./heading2.js";
import type { Heading3BlockObject } from "./heading3.js";
import type { ImageBlockObject } from "./image.js";
import type { LinkPreviewBlockObject } from "./linkPreview.js";
import type { LinkToPageBlockObject } from "./linkToPage.js";
import type { NumberedListBlockObject } from "./numberedList.js";
import type { NumberedListItemBlockObject } from "./numberedListItem.js";
import type { ParagraphBlockObject } from "./paragraph.js";
import type { PdfBlockObject } from "./pdf.js";
import type { QuoteBlockObject } from "./quote.js";
import type { SyncedBlockBlockObject } from "./syncedBlock.js";
import type { TableOfContentsBlockObject } from "./tableOfContents.js";
import type { TableRowBlockObject } from "./tableRow.js";
import type { TemplateBlockObject } from "./template.js";
import type { ToggleBlockObject } from "./toggle.js";
import type { UnsupportedBlockObject } from "./unsupported.js";
import type { VideoBlockObject } from "./video.js";
import type { BlockProps } from "../common.js";
import type { ComponentType } from "react";

export type BlockBlockObject =
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
  // | IconObject
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

export type BlockBlockProps = BlockProps<BlockBlockObject>;

export type BlockBlock = ComponentType<BlockBlockProps>;
