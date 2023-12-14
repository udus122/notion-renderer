import { PropertyIcon } from "./PropertyIcon.js";

import type { DatabaseObject } from "../../types/notion/database.js";
import type { PropertyValue as PropertyValueType } from "../../types/notion/pages/properties/properties.js";
import type { FC } from "react";

type Props = {
  name: string;
  value: PropertyValueType | DatabaseObject["properties"][string];
};

export const PropertyName: FC<Props> = ({ name, value }) => {
  return (
    <div className="notion-property-name">
      <PropertyIcon propertyValue={value} />
      <span>{name}</span>
    </div>
  );
};
