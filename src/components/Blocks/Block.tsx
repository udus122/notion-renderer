import { AnnotationItemProvider } from "../Mapper/Annotation.js";
import { BlockProvider } from "../Mapper/Block.js";
import { useMapper } from "../Mapper/hooks.js";
import { LinkProvider } from "../Mapper/Link.js";
import { RichTextItemProvider } from "../Mapper/RichText.js";

import { Audio } from "./Audio.js";
import { Bookmark } from "./Bookmark.js";
import { Breadcrumb } from "./Breadcrumb.js";
import { BulletedList } from "./BulletedList.js";
import { BulletedListItem } from "./BulletedListItem.js";
import { Callout } from "./Callout.js";
import { ChildDatabase } from "./ChildDatabase.js";
import { ChildPage } from "./ChildPage.js";
import { Code } from "./Code.js";
import { Column } from "./Column.js";
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
import { TableRow } from "./TableRow.js";
import { Template } from "./Template.js";
import { ToDo } from "./ToDo.js";
import { Toggle } from "./Toggle.js";
import { Unsupported } from "./Unsupported.js";
import { Video } from "./Video.js";

import type {
  BlockBlock,
  BlockBlockObject,
} from "../../types/notion/blocks/block.js";
import type { LinkProps } from "../../types/notion/link.js";
import type { AnnotationItemMapper } from "../../types/notion/mapper/annotationItem.js";
import type { BlockMapper } from "../../types/notion/mapper/block.js";
import type { RichTextItemMapper } from "../../types/notion/mapper/richTextItem.js";
import type { FC } from "react";

type Props = {
  block: BlockBlockObject;
  blocks: Array<BlockBlockObject>;
  blockMapper?: BlockMapper;
  richTextItemMapper?: RichTextItemMapper;
  annotationMapper?: AnnotationItemMapper;
  LinkComponent?: React.ComponentType<LinkProps>;
};

export const Block: FC<Props> = ({
  block,
  blocks,
  blockMapper,
  richTextItemMapper,
  annotationMapper,
  LinkComponent,
}) => {
  return (
    <div className="notion_block">
      <BlockProvider mapper={blockMapper}>
        <RichTextItemProvider mapper={richTextItemMapper}>
          <AnnotationItemProvider mapper={annotationMapper}>
            <LinkProvider link={LinkComponent}>
              <BlockSwitcher block={block} blocks={blocks} />
            </LinkProvider>
          </AnnotationItemProvider>
        </RichTextItemProvider>
      </BlockProvider>
    </div>
  );
};

const BlockSwitcher: BlockBlock = ({ block, blocks }) => {
  if (!block) return null;
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
    column: Column,
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
    table_row: TableRow,
    template: Template,
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
