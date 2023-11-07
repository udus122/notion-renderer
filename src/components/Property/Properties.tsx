import { Property } from "./Property.js";

import type { PropertyItemObject } from "../../types/notion/property/propertyItem.js";
import type { FC } from "react";

type Props = {
  properties: Record<string, PropertyItemObject>;
  hidePropertyName?: boolean;
};

export const Properties: FC<Props> = ({
  properties,
  hidePropertyName = false,
}) => {
  return (
    <div className="notion-properties">
      {Object.entries(properties).map(([name, item]) => {
        return (
          <Property
            propertyName={name}
            propertyItem={item}
            hidePropertyName={hidePropertyName}
          />
        );
      })}
    </div>
  );
};
