import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

import type {
  BlockComponentProps,
  EquationBlockObjectComponent,
} from "@/types/components";

type Props = BlockComponentProps<EquationBlockObjectComponent>;

const Equation: React.FC<Props> = ({ block }) => {
  return (
    <div id={block.id} className="notion_equation">
      <BlockMath math={block.equation.expression} />
    </div>
  );
};

export default Equation;
