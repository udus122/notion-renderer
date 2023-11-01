import { PropertyItem } from "./PropertyItem.js";

import type { PropertyItemObject } from "../../types/notion/propertyItem/propertyItem.js";
import type { FC } from "react";

type Props = {
  properties: Record<string, PropertyItemObject>;
};

export const Property: FC<Props> = ({ properties }) => {
  return (
    <div className="notion-properties">
      {Object.values(properties).map((propertyItem) => {
        return <PropertyItem key={propertyItem.id} property={propertyItem} />;
      })}
    </div>
  );
};
