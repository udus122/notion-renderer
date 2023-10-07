import { BlockComponentProps, BlockObjectComponent } from "@/types";

import Audio from "./Audio";
import BulletedList from "./BulletedList";
import BulletedListItem from "./BulletedListItem";
import Callout from "./Callout";
import Code from "./Code";
import ColumnList from "./ColumnList";
import Divider from "./Divider";
import Equation from "./Equation";
import Heading1 from "./Heading1";
import Heading2 from "./Heading2";
import Heading3 from "./Heading3";
import Image from "./Image";
import NumberedList from "./NumberedList";
import NumberedListItem from "./NumberedListItem";
import Paragraph from "./Paragraph";
import Pdf from "./Pdf";
import Quote from "./Quote";
import Table from "./Table";
import TableOfContents from "./TableOfContents";
import ToDo from "./ToDo";
import Toggle from "./Toggle";
import Unsupported from "./Unsupported";
import Video from "./Video";

type Props = BlockComponentProps<BlockObjectComponent>;

const Block: React.FC<Props> = ({
  block,
  blocks,
  customBlockComponentMapper = {},
}) => {
  const blockComponentMapper = {
    audio: Audio,
    bookmark: Unsupported,
    breadcrumb: Unsupported,
    bulleted_list: BulletedList,
    bulleted_list_item: BulletedListItem,
    callout: Callout,
    child_database: Unsupported,
    child_page: Unsupported,
    code: Code,
    column: Unsupported,
    column_list: ColumnList,
    divider: Divider,
    embed: Unsupported,
    equation: Equation,
    file: Unsupported,
    heading_1: Heading1,
    heading_2: Heading2,
    heading_3: Heading3,
    image: Image,
    link_preview: Unsupported,
    link_to_page: Unsupported,
    numbered_list: NumberedList,
    numbered_list_item: NumberedListItem,
    paragraph: Paragraph,
    pdf: Pdf,
    quote: Quote,
    synced_block: Unsupported,
    table: Table,
    table_of_contents: TableOfContents,
    table_row: Unsupported,
    template: Unsupported,
    to_do: ToDo,
    toggle: Toggle,
    unsupported: Unsupported,
    video: Video,
    ...customBlockComponentMapper,
  };

  const BlockComponent = blockComponentMapper[block.type];
  return BlockComponent ? (
    <div className="notion_block">
      <BlockComponent
        // FIXME
        // @ts-expect-error: to avoid Type `'BlockObjectComponent' is not assignable to type 'never'.`
        block={block}
        blocks={blocks}
        customBlockComponentMapper={customBlockComponentMapper}
      />
    </div>
  ) : (
    <Unsupported block={block} />
  );
};

export default Block;
