import { PropertyIcon } from "./PropertyIcon";

import type { DatabaseObject } from "@udus/notion-types";
import type { PropertyItemType } from "@udus/notion-types";
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
