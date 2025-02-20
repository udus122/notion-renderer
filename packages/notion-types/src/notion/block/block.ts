import type { AudioBlockObject } from "./audio";
import type { BookmarkBlockObject } from "./bookmark";
import type { BreadcrumbBlockObject } from "./breadcrumb";
import type { BulletedListBlockObject } from "./bulletedList";
import type { BulletedListItemBlockObject } from "./bulletedListItem";
import type { CalloutBlockObject } from "./callout";
import type { ChildDatabaseBlockObject } from "./childDatabase";
import type { ChildPageBlockObject } from "./childPage";
import type { CodeBlockObject } from "./code";
import type { ColumnBlockObject } from "./column";
import type { ColumnListBlockObject } from "./columnList";
import type { DividerBlockObject } from "./divider";
import type { EmbedBlockObject } from "./embed";
import type { EquationBlockObject } from "./equation";
import type { FileBlockObject } from "./file";
import type { Heading1BlockObject } from "./heading1";
import type { Heading2BlockObject } from "./heading2";
import type { Heading3BlockObject } from "./heading3";
import type { ImageBlockObject } from "./image";
import type { LinkPreviewBlockObject } from "./linkPreview";
import type { LinkToPageBlockObject } from "./linkToPage";
import type { NumberedListBlockObject } from "./numberedList";
import type { NumberedListItemBlockObject } from "./numberedListItem";
import type { ParagraphBlockObject } from "./paragraph";
import type { PdfBlockObject } from "./pdf";
import type { QuoteBlockObject } from "./quote";
import type { SyncedBlockBlockObject } from "./syncedBlock";
import type { TableBlockObject } from "./table";
import type { TableOfContentsBlockObject } from "./tableOfContents";
import type { TableRowBlockObject } from "./tableRow";
import type { TemplateBlockObject } from "./template";
import type { ToDoBlockObject } from "./toDo";
import type { ToggleBlockObject } from "./toggle";
import type { UnsupportedBlockObject } from "./unsupported";
import type { VideoBlockObject } from "./video";
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

export type BlockBlockProps<T extends BlockBlockObject = BlockBlockObject> = {
  block: T;
};

export type BlockBlock = ComponentType<BlockBlockProps>;
