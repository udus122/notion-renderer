import { Property } from "./Property";

import type { PropertiesType } from "@udus/notion-types";
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
