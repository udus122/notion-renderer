import { DateComponent } from "../Date.js";

import type { DatePropertyItemComponent } from "../../types/notion/propertyItem/date.js";

export const DateProperty: DatePropertyItemComponent = ({ propertyItem }) => {
  if (!propertyItem.date) return null;

  return (
    <div
      id={propertyItem.id}
      className="notion-property-item notion-created-time"
    >
      <DateComponent date={propertyItem.date} />
    </div>
  );
};
