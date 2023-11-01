import type { SelectPropertyItemComponent } from "../../types/notion/propertyItem/select.js";

export const SelectProperty: SelectPropertyItemComponent = ({
  propertyItem,
}) => {
  return (
    <div id={propertyItem.id} className="notion-property-item notion-select">
      {propertyItem.select && (
        <span
          className={`notion-pill notion-pill-color-${propertyItem.select.color}`}
        >
          {propertyItem.select.name}
        </span>
      )}
    </div>
  );
};
