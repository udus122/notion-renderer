import type { BlockComponentProps, BlockObjectComponent } from "@/types";

type Props = BlockComponentProps<BlockObjectComponent>;

const Unsupported: React.FC<Props> = ({ block }) => {
  console.warn(`${block.type} is not supported`);
  return null;
};

export default Unsupported;