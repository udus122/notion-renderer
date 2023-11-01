import type { DatePropertyItemComponent } from "../../types/notion/propertyItem/date.js";

export const DateProperty: DatePropertyItemComponent = ({ propertyItem }) => {
  if (!propertyItem.date) return null;

  const { start, end } = propertyItem.date;

  return (
    <div
      id={propertyItem.id}
      className="notion-property-item notion-created-time"
    >
      <span>{new Date(start).toLocaleDateString()}</span>
      {end && (
        <span>
          <span> → </span>
          <span>{new Date(end).toLocaleDateString()}</span>
        </span>
      )}
    </div>
  );
};
