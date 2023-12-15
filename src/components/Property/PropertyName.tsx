import { PropertyIcon } from "./PropertyIcon.js";

import type { DatabaseObject } from "../../types/notion/database.js";
import type { PropertyItem as PropertyItemType } from "../../types/notion/pages/properties/properties.js";
import type { FC } from "react";

type Props = {
  name: string;
  value: PropertyItemType | DatabaseObject["properties"][string];
};

export const PropertyName: FC<Props> = ({ name, value }) => {
  return (
    <div className="notion-property-name">
      <PropertyIcon propertyItem={value} />
      <span>{name}</span>
    </div>
  );
};
