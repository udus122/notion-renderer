import "katex/dist/katex.min.css";
import { BlockMath } from "react-katex";

import type {
  BlockComponentProps,
  EquationComponentBlockObject,
} from "@/types";

type Props = BlockComponentProps<EquationComponentBlockObject>;

const Equation: React.FC<Props> = ({ block }) => {
  return (
    <div id={block.id} className="notion_equation">
      <BlockMath math={block.equation.expression} />
    </div>
  );
};

export default Equation;
