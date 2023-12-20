import { PropertyItem } from "./PropertyItem.js";
import { PropertyName } from "./PropertyName.js";

import type { PropertyItemType } from "../../types/notion/property/properties.js";
import type { FC } from "react";

type Props = {
  name: string;
  value: PropertyItemType;
  hideName?: boolean;
};

export const Property: FC<Props> = ({ name, value, hideName = false }) => {
  return (
    <div className="notion-property">
      {!hideName && <PropertyName name={name} value={value} />}
      <PropertyItem key={value.id} value={value} />
    </div>
  );
};
