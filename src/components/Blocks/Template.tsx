import { Unsupported } from "./Unsupported.js";

import type { BlockProps } from "./Block.js";
import type { TemplateBlockObject } from "@udus/notion-libs";

type Props = BlockProps<TemplateBlockObject>;

export const Template: React.FC<Props> = ({ block, blocks }) => {
  return <Unsupported block={block} blocks={blocks} />;
};
