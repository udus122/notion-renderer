import { Property } from "./Property.js";

import type { PropertiesType as PropertiesType } from "../../types/notion/property/properties.js";
import type { FC } from "react";

type Props = {
  properties: PropertiesType;
  hidePropertyName?: boolean;
};

export const Properties: FC<Props> = ({
  properties,
  hidePropertyName = false,
}) => {
  return (
    <div className="notion-properties">
      {Object.entries(properties).map(([name, value]) => {
        return (
          <Property
            key={value.id}
            name={name}
            value={value}
            hideName={hidePropertyName}
          />
        );
      })}
    </div>
  );
};
