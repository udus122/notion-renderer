import { createContext, type ComponentType } from "react";

import { Audio } from "../Blocks/Audio.js";
import { Bookmark } from "../Blocks/Bookmark.js";
import { Breadcrumb } from "../Blocks/Breadcrumb.js";
import { BulletedList } from "../Blocks/BulletedList.js";
import { BulletedListItem } from "../Blocks/BulletedListItem.js";
import { Callout } from "../Blocks/Callout.js";
import { ChildDatabase } from "../Blocks/ChildDatabase.js";
import { ChildPage } from "../Blocks/ChildPage.js";
import { Code } from "../Blocks/Code.js";
import { ColumnList } from "../Blocks/ColumnList.js";
import { Divider } from "../Blocks/Divider.js";
import { Embed } from "../Blocks/Embed.js";
import { Equation } from "../Blocks/Equation.js";
import { File } from "../Blocks/File.js";
import { Heading1 } from "../Blocks/Heading1.js";
import { Heading2 } from "../Blocks/Heading2.js";
import { Heading3 } from "../Blocks/Heading3.js";
import { Image } from "../Blocks/Image.js";
import { LinkPreview } from "../Blocks/LinkPreview.js";
import { LinkToPage } from "../Blocks/LinkToPage.js";
import { NumberedList } from "../Blocks/NumberedList.js";
import { NumberedListItem } from "../Blocks/NumberedListItem.js";
import { Paragraph } from "../Blocks/Paragraph.js";
import { Pdf } from "../Blocks/Pdf.js";
import { Quote } from "../Blocks/Quote.js";
import { SyncedBlock } from "../Blocks/SyncedBlock.js";
import { Table } from "../Blocks/Table.js";
import { TableOfContents } from "../Blocks/TableOfContents.js";
import { ToDo } from "../Blocks/ToDo.js";
import { Toggle } from "../Blocks/Toggle.js";
import { Unsupported } from "../Blocks/Unsupported.js";
import { Video } from "../Blocks/Video.js";
import { type LinkProps, Link } from "../Link.js";
import {
  Color,
  Bold,
  Italic,
  Strikethrough,
  Underline,
  InlineCode,
  InlineEquation,
  Mention,
  Text,
} from "../RichText/index.js";

export const AnnotationContext = createContext({
  color: Color,
  bold: Bold,
  italic: Italic,
  strikethrough: Strikethrough,
  underline: Underline,
  code: InlineCode,
});

export const BlockContext = createContext({
  audio: Audio,
  bookmark: Bookmark,
  breadcrumb: Breadcrumb,
  bulleted_list: BulletedList,
  bulleted_list_item: BulletedListItem,
  callout: Callout,
  child_database: ChildDatabase,
  child_page: ChildPage,
  code: Code,
  column: Unsupported,
  column_list: ColumnList,
  divider: Divider,
  embed: Embed,
  equation: Equation,
  file: File,
  heading_1: Heading1,
  heading_2: Heading2,
  heading_3: Heading3,
  image: Image,
  link_preview: LinkPreview,
  link_to_page: LinkToPage,
  numbered_list: NumberedList,
  numbered_list_item: NumberedListItem,
  paragraph: Paragraph,
  pdf: Pdf,
  quote: Quote,
  synced_block: SyncedBlock,
  table: Table,
  table_of_contents: TableOfContents,
  table_row: Unsupported,
  template: Unsupported,
  to_do: ToDo,
  toggle: Toggle,
  unsupported: Unsupported,
  video: Video,
});

export const LinkContext = createContext<ComponentType<LinkProps>>(Link);

export const RichTextItemContext = createContext({
  text: Text,
  equation: InlineEquation,
  mention: Mention,
});
