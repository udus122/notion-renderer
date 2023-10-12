import type {
  BlockComponentProps,
  BlockObjectComponent,
} from "@/types/components";

type Props = BlockComponentProps<BlockObjectComponent>;

export const Unsupported: React.FC<Props> = ({ block }) => {
  console.warn(`${block.type} is not supported`);
  return null;
};
