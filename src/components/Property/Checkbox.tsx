import { Checkbox } from "../Common/Checkbox.js";

import type { CheckboxPropertyItemComponent } from "../../types/notion/property/checkbox.js";

export const CheckboxProperty: CheckboxPropertyItemComponent = ({
  propertyItem,
}) => (
  <div id={propertyItem.id} className="notion-property-item notion-checkbox">
    <Checkbox checked={propertyItem.checkbox} />
  </div>
);
