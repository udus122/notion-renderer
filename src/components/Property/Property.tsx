import { PropertyItem } from "./PropertyItem.js";

import type { PropertyItemObject } from "../../types/notion/propertyItem/propertyItem.js";
import type { FC } from "react";

type Props = {
  propertyName: string;
  propertyItem: PropertyItemObject;
  hidePropertyName?: boolean;
};

export const Property: FC<Props> = ({
  propertyName,
  propertyItem,
  hidePropertyName = false,
}) => {
  return (
    <div className="notion-property">
      {!hidePropertyName && (
        <div className="notion-property-name">{propertyName}</div>
      )}
      <PropertyItem key={propertyItem.id} property={propertyItem} />
    </div>
  );
};
