import { format as formatDate } from "date-fns";

import type { LastEditedTimePropertyItemComponent } from "@udus/notion-types";

export const LastEditedTimeProperty: LastEditedTimePropertyItemComponent = ({
  propertyItem,
  format = "yyyy-MM-dd p",
}) => {
  const lastEditedTime = new Date(propertyItem.last_edited_time);
  return (
    <div
      id={propertyItem.id}
      className="notion-property-item notion-created-time"
    >
      {formatDate(lastEditedTime, format)}
    </div>
  );
};
