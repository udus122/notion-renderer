import { PropertyIcon } from "./PropertyIcon.js";

import type { DatabaseObject } from "../../types/notion/database.js";
import type { PropertyItemObject } from "../../types/notion/pages/properties/propertyItem.js";

export const PropertyName = ({
  propertyName,
  propertyItem,
}: {
  propertyName: string;
  propertyItem: PropertyItemObject | DatabaseObject["properties"][string];
}) => {
  return (
    <div className="notion-property-name">
      <PropertyIcon property={propertyItem} />
      <span>{propertyName}</span>
    </div>
  );
};
