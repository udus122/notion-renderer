import Block from "./Block";

import type {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

type Props = {
  blocks: Array<PartialBlockObjectResponse | BlockObjectResponse>;
};

const Blocks: React.FC<Props> = function ({ blocks }) {
  return (
    <>
      {blocks.map((block) => {
        return <Block key={block.id} block={block} />;
      })}
    </>
  );
};

export default Blocks;
