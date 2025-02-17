import type { StatusPropertyItemComponent } from "@udus/notion-types";

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
