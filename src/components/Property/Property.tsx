import { PropertyItem } from "./PropertyItem.js";
import { PropertyName } from "./PropertyName.js";

import type { PropertyItemObject } from "../../types/notion/pages/properties/propertyItem.js";
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
        <PropertyName propertyName={propertyName} propertyItem={propertyItem} />
      )}
      <PropertyItem key={propertyItem.id} property={propertyItem} />
    </div>
  );
};
