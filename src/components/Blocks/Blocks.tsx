import Block from "./Block";

import type {
  BulletedListBlockObjectComponent,
  BlockObjectComponent,
  NumberedListBlockObjectComponent,
  ListBlockChildrenComponent,
} from "@/types";

type Props = {
  blocks: ListBlockChildrenComponent;
  customBlockComponentMapper?: object;
};

const Blocks: React.FC<Props> = function ({
  blocks,
  customBlockComponentMapper = {},
}) {
  const wrappedList = blocks.results.reduce(
    (
      prevList: Array<BlockObjectComponent>,
      currBlock: BlockObjectComponent
    ): Array<BlockObjectComponent> => {
      /* If the block.type is neither
       * 'bulleted_list_item' nor 'numbered_list_item' nor 'bulleted_list' nor 'numbered_list',
       * return the block as it is.
       */
      if (
        currBlock.type !== "bulleted_list" &&
        currBlock.type !== "numbered_list" &&
        currBlock.type !== "bulleted_list_item" &&
        currBlock.type !== "numbered_list_item"
      ) {
        return [...prevList, currBlock];
      }
      const prevBlock = prevList[prevList.length - 1];

      // For the first time,
      // create a list object and add list_item to the list.
      const id = crypto.randomUUID();
      if (
        // bulleted_list_item
        currBlock.type === "bulleted_list_item" &&
        prevBlock?.type !== "bulleted_list"
      ) {
        const bulletedList = {
          id,
          type: "bulleted_list",
          items: [currBlock],
        } satisfies BulletedListBlockObjectComponent;
        return [...prevList, bulletedList];
      }
      if (
        // numbered_list_item
        currBlock.type === "numbered_list_item" &&
        prevBlock?.type !== "numbered_list"
      ) {
        const numberedList = {
          id,
          type: "numbered_list",
          items: [currBlock],
        } satisfies NumberedListBlockObjectComponent;
        return [...prevList, numberedList];
      }

      // Intermediate,
      // add the second and subsequent list items to the previous list.
      if (
        // bulleted_list
        currBlock.type === "bulleted_list_item" &&
        prevBlock?.type === "bulleted_list"
      ) {
        prevBlock.items = [...prevBlock.items, currBlock];
      }
      if (
        // numbered_list_item
        currBlock.type === "numbered_list_item" &&
        prevBlock?.type === "numbered_list"
      ) {
        prevBlock.items = [...prevBlock.items, currBlock];
      }

      // If the condition is not met, do not display/render.
      return prevList;
    },
    []
  );

  return (
    <>
      {wrappedList.map((block) => {
        return (
          <Block
            key={block.id}
            block={block}
            blocks={blocks}
            customBlockComponentMapper={customBlockComponentMapper}
          />
        );
      })}
    </>
  );
};

export default Blocks;
