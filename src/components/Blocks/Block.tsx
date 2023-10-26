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
import { useMapper } from "../Mapper/hooks.js";

import type {
  BlockObject,
  Heading1BlockObject,
  Heading2BlockObject,
  Heading3BlockObject,
  ToggleBlockObject,
} from "../../types/notion.js";

export type BlockProps<T extends BlockObject> = {
  block: T;
  blocks: Array<BlockObject>;
};

export type TogglableBlockObjectComponent =
  | ToggleBlockObject
  | Heading1BlockObject
  | Heading2BlockObject
  | Heading3BlockObject;

type Props = BlockProps<BlockObject>;

export const Block: React.FC<Props> = ({ block, blocks = [] }) => {
  return (
    <div className="notion_block">
      <BlockComponent block={block} blocks={blocks} />
    </div>
  );
};

const BlockComponent: React.FC<Props> = ({ block, blocks }) => {
  const { blockMapper } = useMapper();

  const mapper = {
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
    ...blockMapper,
  };

  switch (block.type) {
    case "audio": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "bookmark": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "breadcrumb": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "bulleted_list": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "bulleted_list_item": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "callout": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "child_database": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "child_page": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "code": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "column": {
      console.warn(
        `top level column block is not supported. column block must be child of column_list block.`
      );
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "column_list": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "divider": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "embed": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "equation": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "file": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "heading_1": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "heading_2": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "heading_3": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "image": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "link_preview": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "link_to_page": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "numbered_list": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "numbered_list_item": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "paragraph": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "pdf": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "quote": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "synced_block": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "table": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "table_of_contents": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "table_row": {
      console.warn(
        `top level table_row block is not supported. table_row block must be child of table block.`
      );
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "template": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "to_do": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "toggle": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "unsupported": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    case "video": {
      const BlockComponent = mapper[block.type];
      return <BlockComponent block={block} blocks={blocks} />;
    }
    default: {
      // @ts-expect-error: to log when an unexpected 'block.type' is encountered, which is not in the type.
      console.warn(`${block.type as { type: never }} is never.`);
      return null;
    }
  }
};
