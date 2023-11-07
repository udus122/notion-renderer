import { PropertyItem } from "./PropertyItem.js";

import type { PropertyItemObject } from "../../types/notion/propertyItem/propertyItem.js";
import type { FC } from "react";

type Props = {
  properties: Record<string, PropertyItemObject>;
  hidePropertyName?: boolean;
};

export const Property: FC<Props> = ({
  properties,
  hidePropertyName = false,
}) => {
  return (
    <div className="notion-properties">
      {Object.entries(properties).map(([name, item]) => {
        return (
          <div className="notion-property">
            {!hidePropertyName && (
              <div className="notion-property-name">{name}</div>
            )}
            <PropertyItem key={item.id} property={item} />
          </div>
        );
      })}
    </div>
  );
};
