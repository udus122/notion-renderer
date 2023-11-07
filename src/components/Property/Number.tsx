import type { NumberPropertyItemComponent } from "../../types/notion/pages/properties/number.js";

export const NumberProperty: NumberPropertyItemComponent = ({
  propertyItem,
}) => {
  return (
    <div id={propertyItem.id} className="notion-property-item notion-number">
      {propertyItem.number}
    </div>
  );
};
