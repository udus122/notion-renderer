import type { UniqueIdPropertyItemComponent } from "@udus/notion-types";

export const UniqueIdProperty: UniqueIdPropertyItemComponent = ({
  propertyItem,
}) => {
  return (
    <div id={propertyItem.id} className="notion-property-item notion-unique-id">
      <span>{propertyItem.unique_id.prefix}</span>-
      <span>{propertyItem.unique_id.number}</span>
    </div>
  );
};
