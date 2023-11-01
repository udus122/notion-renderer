import type { CreatedTimePropertyItemComponent } from "../../types/notion/propertyItem/createdTime.js";

export const CreatedTimeProperty: CreatedTimePropertyItemComponent = ({
  propertyItem,
}) => {
  const createdTime = new Date(propertyItem.created_time);
  return (
    <div
      id={propertyItem.id}
      className="notion-property-item notion-created-time"
    >
      {createdTime.toLocaleString()}
    </div>
  );
};