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

import type { BlockObject } from "../../types/components.js";
import type { BlockComponentProps } from "src/types/utils.js";

type Props = BlockComponentProps<BlockObject>;

export const Block: React.FC<Props> = ({ block, blocks = [], mapper = {} }) => {
  return (
    <div className="notion_block">
      <BlockComponent block={block} blocks={blocks} mapper={mapper} />
    </div>
  );
};

const BlockComponent: React.FC<Props> = ({ block, blocks, mapper = {} }) => {
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
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "bookmark": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "breadcrumb": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "bulleted_list": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "bulleted_list_item": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "callout": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "child_database": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "child_page": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "code": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "column": {
      console.warn(
        `top level column block is not supported. column block must be child of column_list block.`
      );
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "column_list": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "divider": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "embed": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "equation": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "file": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "heading_1": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "heading_2": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "heading_3": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "image": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "link_preview": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "link_to_page": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "numbered_list": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "numbered_list_item": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "paragraph": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "pdf": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "quote": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "synced_block": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "table": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "table_of_contents": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "table_row": {
      console.warn(
        `top level table_row block is not supported. table_row block must be child of table block.`
      );
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "template": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "to_do": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "toggle": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "unsupported": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    case "video": {
      const BlockComponent = blockComponentMapper[block.type];
      return <BlockComponent block={block} blocks={blocks} mapper={mapper} />;
    }
    default: {
      // @ts-expect-error: to log when an unexpected 'block.type' is encountered, which is not in the type.
      console.warn(`${block.type as { type: never }} is never.`);
      return null;
    }
  }
};
