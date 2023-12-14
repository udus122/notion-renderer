import { PropertyName } from "./PropertyName.js";
import { PropertyValue } from "./PropertyValue.js";

import type { PropertyValue as PropertyValueType } from "../../types/notion/pages/properties/properties.js";
import type { FC } from "react";

type Props = {
  name: string;
  value: PropertyValueType;
  hideName?: boolean;
};

export const Property: FC<Props> = ({ name, value, hideName = false }) => {
  return (
    <div className="notion-property">
      {!hideName && <PropertyName name={name} value={value} />}
      <PropertyValue key={value.id} value={value} />
    </div>
  );
};
