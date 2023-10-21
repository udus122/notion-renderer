import { Block, type BlockObject } from "./Block.js";

type Props = {
  blocks: Array<BlockObject>;
  mapper?: object;
};

export const Blocks: React.FC<Props> = function ({ blocks, mapper = {} }) {
  return (
    <>
      {blocks.map((block) => {
        return (
          <Block
            key={block.id}
            block={block}
            blocks={blocks}
            richTextMapper={mapper}
          />
        );
      })}
    </>
  );
};

export * from "./Audio.js";
export * from "./Block.js";
export * from "./Bookmark.js";
export * from "./Breadcrumb.js";
export * from "./BulletedList.js";
export * from "./BulletedListItem.js";
export * from "./Callout.js";
export * from "./ChildDatabase.js";
export * from "./ChildPage.js";
export * from "./Code.js";
export * from "./ColumnList.js";
export * from "./Divider.js";
export * from "./Embed.js";
export * from "./Equation.js";
export * from "./File.js";
export * from "./Heading1.js";
export * from "./Heading2.js";
export * from "./Heading3.js";
export * from "./Icon.js";
export * from "./Image.js";
export * from "./LinkPreview.js";
export * from "./LinkToPage.js";
export * from "./NumberedList.js";
export * from "./NumberedListItem.js";
export * from "./Paragraph.js";
export * from "./Pdf.js";
export * from "./Quote.js";
export * from "./SyncedBlock.js";
export * from "./Table.js";
export * from "./ToDo.js";
export * from "./Toggle.js";
export * from "./Unsupported.js";
export * from "./Video.js";
