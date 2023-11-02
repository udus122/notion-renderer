import { format as formatDate } from "date-fns";

import type { CreatedTimePropertyItemComponent } from "../../types/notion/propertyItem/createdTime.js";

export const CreatedTimeProperty: CreatedTimePropertyItemComponent = ({
  propertyItem,
  format = "yyyy-MM-dd p",
}) => {
  const createdTime = new Date(propertyItem.created_time);
  return (
    <div
      id={propertyItem.id}
      className="notion-property-item notion-created-time"
    >
      {formatDate(createdTime, format)}
    </div>
  );
};
