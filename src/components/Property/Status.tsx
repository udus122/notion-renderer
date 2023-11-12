import type { StatusPropertyItemComponent } from "../../types/notion/pages/properties/status.js";

export const StatusProperty: StatusPropertyItemComponent = ({
  propertyItem,
}) => {
  return (
    <div id={propertyItem.id} className="notion-property-item notion-status">
      {propertyItem.status && (
        <div
          className={`notion-pill notion-pill-color-${propertyItem.status.color}`}
        >
          {propertyItem.status.name}
        </div>
      )}
    </div>
  );
};
