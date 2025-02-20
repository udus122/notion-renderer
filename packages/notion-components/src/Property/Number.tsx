import type { NumberPropertyItemComponent } from "@udus/notion-types";

export const NumberProperty: NumberPropertyItemComponent = ({
  propertyItem,
}) => {
  return (
    <div id={propertyItem.id} className="notion-property-item notion-number">
      {propertyItem.number}
    </div>
  );
};
