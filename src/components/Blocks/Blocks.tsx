import { ListComponentBlockChildrenResponse } from "@/types";

import Block from "./Block";

type Props = {
  blocks: ListComponentBlockChildrenResponse;
};

const Blocks: React.FC<Props> = function ({ blocks }) {
  return (
    <>
      {blocks.results.map((block) => {
        return <Block key={block.id} block={block} blocks={blocks} />;
      })}
    </>
  );
};

export default Blocks;
