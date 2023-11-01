import { PropertyItem } from "./PropertyItem.js";

import type { PropertyItemObject } from "../../types/notion/propertyItem/propertyItem.js";
import type { FC } from "react";

type Props = {
  properties: Record<string, PropertyItemObject>;
};

export const Property: FC<Props> = ({ properties }) => {
  // console.log("properties:", JSON.stringify(properties, null, 2));
  return (
    <div className="notion-properties">
      {Object.entries(properties).map(([propertyName, propertyItem]) => {
        return <PropertyItem key={propertyItem.id} property={propertyItem} />;
      })}
    </div>
  );
};
