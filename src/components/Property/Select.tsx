import type { SelectPropertyItemComponent } from "../../types/notion/propertyItem/select.js";

export const SelectProperty: SelectPropertyItemComponent = ({
  propertyItem,
}) => {
  return (
    <div id={propertyItem.id} className="notion-property-item notion-select">
      <span
        className={`notion-pill notion-pill-color-${
          propertyItem.select?.color ?? "default"
        }`}
      >
        {propertyItem.select?.name ?? ""}
      </span>
    </div>
  );
};
