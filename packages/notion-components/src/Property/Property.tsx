import { PropertyItem } from "./PropertyItem";
import { PropertyName } from "./PropertyName";

import type { PropertyItemType } from "@udus/notion-types";
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
