import { Checkbox } from "../Common/Checkbox.js";
import { DateComponent } from "../Common/Date.js";

import type { FormulaPropertyItemComponent } from "../../types/notion/propertyItem/formula.js";

export const FormulaProperty: FormulaPropertyItemComponent = ({
  propertyItem,
  format,
}) => {
  const { formula } = propertyItem;
  return (
    <div id={propertyItem.id} className="notion-property-item notion-formula">
      {formula.type === "string" ? (
        <span>{formula.string}</span>
      ) : formula.type === "number" ? (
        <span>{formula.number}</span>
      ) : formula.type === "boolean" ? (
        <Checkbox checked={formula.boolean ?? false} />
      ) : formula.type === "date" ? (
        <DateComponent date={formula.date} format={format} />
      ) : null}
    </div>
  );
};
