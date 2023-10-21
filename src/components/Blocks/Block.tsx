import { Audio, type AudioBlockObject } from "./Audio.js";
import { Bookmark, type BookmarkBlockObject } from "./Bookmark.js";
import { Breadcrumb, type BreadcrumbBlockObject } from "./Breadcrumb.js";
import { BulletedList, type BulletedListBlockObject } from "./BulletedList.js";
import {
  BulletedListItem,
  type BulletedListItemBlockObject,
} from "./BulletedListItem.js";
import { Callout, type CalloutBlockObject } from "./Callout.js";
import {
  ChildDatabase,
  type ChildDatabaseBlockObject,
} from "./ChildDatabase.js";
import { ChildPage, type ChildPageBlockObject } from "./ChildPage.js";
import { Code, type CodeBlockObject } from "./Code.js";
import {
  ColumnList,
  type ColumnBlockObject,
  type ColumnListBlockObject,
} from "./ColumnList.js";
import { Divider, type DividerBlockObject } from "./Divider.js";
import { Embed, type EmbedBlockObject } from "./Embed.js";
import { Equation, type EquationBlockObject } from "./Equation.js";
import { File, type FileBlockObject } from "./File.js";
import { Heading1, type Heading1BlockObject } from "./Heading1.js";
import { Heading2, type Heading2BlockObject } from "./Heading2.js";
import { Heading3, type Heading3BlockObject } from "./Heading3.js";
import { Image, type ImageBlockObject } from "./Image.js";
import { LinkPreview, type LinkPreviewBlockObject } from "./LinkPreview.js";
import { LinkToPage, type LinkToPageBlockObject } from "./LinkToPage.js";
import { NumberedList, type NumberedListBlockObject } from "./NumberedList.js";
import {
  NumberedListItem,
  type NumberedListItemBlockObject,
} from "./NumberedListItem.js";
import { Paragraph, type ParagraphBlockObject } from "./Paragraph.js";
import { Pdf, type PdfBlockObject } from "./Pdf.js";
import { Quote, type QuoteBlockObject } from "./Quote.js";
import { SyncedBlock, type SyncedBlockBlockObject } from "./SyncedBlock.js";
import {
  Table,
  type TableBlockObject,
  type TableRowBlockObject,
} from "./Table.js";
import {
  TableOfContents,
  type TableOfContentsBlockObject,
} from "./TableOfContents.js";
import { type TemplateBlockObject } from "./Template.js";
import { ToDo, type ToDoBlockObject } from "./ToDo.js";
import { Toggle, type ToggleBlockObject } from "./Toggle.js";
import { Unsupported, type UnsupportedBlockObject } from "./Unsupported.js";
import { Video, type VideoBlockObject } from "./Video.js";

import type { BlockProps } from "src/types/utils.js";

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

type Props = BlockProps<BlockObject>;

export const Block: React.FC<Props> = ({
  block,
  blocks = [],
  richTextMapper: mapper = {},
}) => {
  return (
    <div className="notion_block">
      <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
    </div>
  );
};

const BlockComponent: React.FC<Props> = ({
  block,
  blocks,
  richTextMapper: mapper = {},
}) => {
  const blockComponentMapper = {
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
    ...mapper,
  };

  switch (block.type) {
    case "audio": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "bookmark": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "breadcrumb": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "bulleted_list": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "bulleted_list_item": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "callout": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "child_database": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "child_page": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "code": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "column": {
      console.warn(
        `top level column block is not supported. column block must be child of column_list block.`
      );
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "column_list": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "divider": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "embed": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "equation": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "file": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "heading_1": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "heading_2": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "heading_3": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "image": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "link_preview": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "link_to_page": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "numbered_list": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "numbered_list_item": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "paragraph": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "pdf": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "quote": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "synced_block": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "table": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "table_of_contents": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "table_row": {
      console.warn(
        `top level table_row block is not supported. table_row block must be child of table block.`
      );
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "template": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "to_do": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "toggle": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "unsupported": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    case "video": {
      const BlockComponent = blockComponentMapper[block.type];
      return (
        <BlockComponent block={block} blocks={blocks} richTextMapper={mapper} />
      );
    }
    default: {
      // @ts-expect-error: to log when an unexpected 'block.type' is encountered, which is not in the type.
      console.warn(`${block.type as { type: never }} is never.`);
      return null;
    }
  }
};

export type TogglableBlockObjectComponent =
  | ToggleBlockObject
  | Heading1BlockObject
  | Heading2BlockObject
  | Heading3BlockObject;
