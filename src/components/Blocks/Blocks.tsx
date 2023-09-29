import Block from "./Block";

import type { ListBlockChildrenResponseEx } from "notionate";

type Props = {
  blocks: ListBlockChildrenResponseEx;
};

const Blocks: React.FC<Props> = function ({ blocks }) {
  return (
    <>
      {blocks.results.map((block) => {
        return <Block key={block.id} block={block} />;
      })}
    </>
  );
};

export default Blocks;
