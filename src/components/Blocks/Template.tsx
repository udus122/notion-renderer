import { Unsupported } from "./Unsupported.js";

import type { TemplateBlockObject, BlockProps } from "@udus/notion-libs";

type Props = BlockProps<TemplateBlockObject>;

export const Template: React.FC<Props> = ({ block, blocks }) => {
  return <Unsupported block={block} blocks={blocks} />;
};
