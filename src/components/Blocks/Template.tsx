import { Unsupported } from "./Unsupported.js";

import type { TemplateBlockObject } from "src/libs/notion/blocks/template.js";
import type { BlockProps } from "src/types/utils.js";

type Props = BlockProps<TemplateBlockObject>;

export const Template: React.FC<Props> = ({ block, blocks }) => {
  return <Unsupported block={block} blocks={blocks} />;
};
