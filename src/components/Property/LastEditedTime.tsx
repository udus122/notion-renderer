import type { LastEditedTimePropertyItemComponent } from "../../types/notion/propertyItem/lastEditedTime.js";

export const LastEditedTimeProperty: LastEditedTimePropertyItemComponent = ({
  propertyItem,
}) => {
  const LastEditedTime = new Date(propertyItem.last_edited_time);
  return (
    <div
      id={propertyItem.id}
      className="notion-property-item notion-created-time"
    >
      {LastEditedTime.toLocaleString()}
    </div>
  );
};
