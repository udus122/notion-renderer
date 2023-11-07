import type { MultiSelectPropertyItemComponent } from "../../types/notion/pages/properties/multiSelect.js";

export const MultiSelectProperty: MultiSelectPropertyItemComponent = ({
  propertyItem,
}) => {
  return (
    <div
      id={propertyItem.id}
      className="notion-property-item notion-multi-select"
    >
      {propertyItem.multi_select.map((select) => (
        <span className={`notion-pill notion-pill-color-${select.color}`}>
          {select.name}
        </span>
      ))}
    </div>
  );
};
