import type { SelectPropertyItemComponent } from "@udus/notion-types";

export const SelectProperty: SelectPropertyItemComponent = ({
  propertyItem,
}) => {
  return (
    <div id={propertyItem.id} className="notion-property-item notion-select">
      {propertyItem.select && (
        <div
          className={`notion-pill notion-pill-color-${propertyItem.select.color}`}
        >
          {propertyItem.select.name}
        </div>
      )}
    </div>
  );
};
