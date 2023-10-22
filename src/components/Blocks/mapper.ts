import React, { createContext, useContext } from "react";

import { Link, type LinkProps } from "../Link.js";
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

import { Audio } from "./Audio.js";
import { Bookmark } from "./Bookmark.js";
import { Breadcrumb } from "./Breadcrumb.js";
import { BulletedList } from "./BulletedList.js";
import { BulletedListItem } from "./BulletedListItem.js";
import { Callout } from "./Callout.js";
import { ChildDatabase } from "./ChildDatabase.js";
import { ChildPage } from "./ChildPage.js";
import { Code } from "./Code.js";
import { ColumnList } from "./ColumnList.js";
import { Divider } from "./Divider.js";
import { Embed } from "./Embed.js";
import { Equation } from "./Equation.js";
import { File } from "./File.js";
import { Heading1 } from "./Heading1.js";
import { Heading2 } from "./Heading2.js";
import { Heading3 } from "./Heading3.js";
import { Image } from "./Image.js";
import { LinkPreview } from "./LinkPreview.js";
import { LinkToPage } from "./LinkToPage.js";
import { NumberedList } from "./NumberedList.js";
import { NumberedListItem } from "./NumberedListItem.js";
import { Paragraph } from "./Paragraph.js";
import { Pdf } from "./Pdf.js";
import { Quote } from "./Quote.js";
import { SyncedBlock } from "./SyncedBlock.js";
import { Table } from "./Table.js";
import { TableOfContents } from "./TableOfContents.js";
import { ToDo } from "./ToDo.js";
import { Toggle } from "./Toggle.js";
import { Unsupported } from "./Unsupported.js";
import { Video } from "./Video.js";

export const useMapper = () => {
  const blockMapper = useContext(BlockMapper);
  const richTextItemMapper = useContext(RichTextItemMapper);
  const annotationMapper = useContext(AnnotationMapper);
  const Link = useContext(LinkComponentMapper);
  return {
    blockMapper,
    richTextItemMapper,
    annotationMapper,
    Link,
  };
};

export const defaultBlockMapper = {
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
};

export const BlockMapper = createContext(defaultBlockMapper);

export const defaultRichTextItemMapper = {
  text: Text,
  equation: InlineEquation,
  mention: Mention,
};

export const RichTextItemMapper = createContext(defaultRichTextItemMapper);

export const defaultAnnotationMapper = {
  color: Color,
  bold: Bold,
  italic: Italic,
  strikethrough: Strikethrough,
  underline: Underline,
  code: InlineCode,
};

export const AnnotationMapper = createContext(defaultAnnotationMapper);

export const LinkComponentMapper =
  createContext<React.ComponentType<LinkProps>>(Link);
