import { Checkbox } from "../Common/Checkbox";

import type { CheckboxPropertyItemComponent } from "@udus/notion-types";

export const CheckboxProperty: CheckboxPropertyItemComponent = ({
  propertyItem,
}) => (
  <div id={propertyItem.id} className="notion-property-item notion-checkbox">
    <Checkbox checked={propertyItem.checkbox} />
  </div>
);
