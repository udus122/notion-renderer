import { DateComponent } from "../Common/Date.js";

import type { RollupPropertyItemComponent } from "../../types/notion/property/rollup.js";

export const RollupProperty: RollupPropertyItemComponent = ({
  propertyItem,
  format,
}) => {
  const { rollup } = propertyItem;
  return (
    <div id={propertyItem.id} className="notion-property-item notion-rollup">
      {rollup.type === "number" ? (
        <span>{rollup.number}</span>
      ) : rollup.type === "date" ? (
        <DateComponent date={rollup.date} format={format} />
      ) : rollup.type === "array" ? null : null}
    </div>
  );
};
