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
          <Block key={block.id} block={block} blocks={blocks} mapper={mapper} />
        );
      })}
    </>
  );
};
