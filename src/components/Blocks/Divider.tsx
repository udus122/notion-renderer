import type {
  BlockComponentProps,
  DividerBlockObjectComponent,
} from "@/types/components.js";

type Props = BlockComponentProps<DividerBlockObjectComponent>;

export const Divider: React.FC<Props> = ({ block }) => {
  return <hr id={block.id} className="notion_divider" />;
};
