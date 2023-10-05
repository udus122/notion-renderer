import type { BlockComponentProps, ComponentBlockObject } from "@/types";

type Props = BlockComponentProps<ComponentBlockObject>;

const Unsupported: React.FC<Props> = ({ block }) => {
  console.warn(`${block.type} is not supported`);
  return null;
};

export default Unsupported;
