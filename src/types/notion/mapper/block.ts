import type { AudioBlock } from "../block/audio.js";
import type { BookmarkBlock } from "../block/bookmark.js";
import type { BreadcrumbBlock } from "../block/breadcrumb.js";
import type { BulletedListBlock } from "../block/bulletedList.js";
import type { BulletedListItemBlock } from "../block/bulletedListItem.js";
import type { CalloutBlock } from "../block/callout.js";
import type { ChildDatabaseBlock } from "../block/childDatabase.js";
import type { ChildPageBlock } from "../block/childPage.js";
import type { CodeBlock } from "../block/code.js";
import type { ColumnBlock } from "../block/column.js";
import type { ColumnListBlock } from "../block/columnList.js";
import type { DividerBlock } from "../block/divider.js";
import type { EmbedBlock } from "../block/embed.js";
import type { EquationBlock } from "../block/equation.js";
import type { FileBlock } from "../block/file.js";
import type { Heading1Block } from "../block/heading1.js";
import type { Heading2Block } from "../block/heading2.js";
import type { Heading3Block } from "../block/heading3.js";
import type { ImageBlock } from "../block/image.js";
import type { LinkPreviewBlock } from "../block/linkPreview.js";
import type { LinkToPageBlock } from "../block/linkToPage.js";
import type { NumberedListBlock } from "../block/numberedList.js";
import type { NumberedListItemBlock } from "../block/numberedListItem.js";
import type { ParagraphBlock } from "../block/paragraph.js";
import type { PdfBlock } from "../block/pdf.js";
import type { QuoteBlock } from "../block/quote.js";
import type { SyncedBlockBlock } from "../block/syncedBlock.js";
import type { TableBlock } from "../block/table.js";
import type { TableOfContentsBlock } from "../block/tableOfContents.js";
import type { TableRowBlock } from "../block/tableRow.js";
import type { TemplateBlock } from "../block/template.js";
import type { ToDoBlock } from "../block/toDo.js";
import type { ToggleBlock } from "../block/toggle.js";
import type { UnsupportedBlock } from "../block/unsupported.js";
import type { VideoBlock } from "../block/video.js";

export type BlockMapper = Partial<{
  audio: AudioBlock;
  bookmark: BookmarkBlock;
  breadcrumb: BreadcrumbBlock;
  bulleted_list: BulletedListBlock;
  bulleted_list_item: BulletedListItemBlock;
  callout: CalloutBlock;
  child_database: ChildDatabaseBlock;
  child_page: ChildPageBlock;
  code: CodeBlock;
  column: ColumnBlock;
  column_list: ColumnListBlock;
  divider: DividerBlock;
  embed: EmbedBlock;
  equation: EquationBlock;
  file: FileBlock;
  heading_1: Heading1Block;
  heading_2: Heading2Block;
  heading_3: Heading3Block;
  image: ImageBlock;
  link_preview: LinkPreviewBlock;
  link_to_page: LinkToPageBlock;
  numbered_list: NumberedListBlock;
  numbered_list_item: NumberedListItemBlock;
  paragraph: ParagraphBlock;
  pdf: PdfBlock;
  quote: QuoteBlock;
  synced_block: SyncedBlockBlock;
  table: TableBlock;
  table_of_contents: TableOfContentsBlock;
  table_row: TableRowBlock;
  template: TemplateBlock;
  to_do: ToDoBlock;
  toggle: ToggleBlock;
  unsupported: UnsupportedBlock;
  video: VideoBlock;
}>;
