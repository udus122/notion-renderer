import { BlockMath } from "react-katex";

import type {
  BlockComponentProps,
  EquationBlockObjectComponent,
} from "../../types/components.js";

type Props = BlockComponentProps<EquationBlockObjectComponent>;

export const Equation: React.FC<Props> = ({ block }) => {
  return (
    <div id={block.id} className="notion_equation">
      <BlockMath math={block.equation.expression} />
    </div>
  );
};
