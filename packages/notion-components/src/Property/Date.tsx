import { DateComponent } from "../Common/Date";

import type { DatePropertyItemComponent } from "@udus/notion-types";

export const DateProperty: DatePropertyItemComponent = ({
  propertyItem,
  format,
}) => {
  if (!propertyItem.date) return null;

  return (
    <div
      id={propertyItem.id}
      className="notion-property-item notion-created-time"
    >
      <DateComponent date={propertyItem.date} format={format} />
    </div>
  );
};
