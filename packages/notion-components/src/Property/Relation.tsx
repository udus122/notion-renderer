import { RelationItem } from "../Common/RelationItem.js";

import type { RelationPropertyItemComponent } from "../../types/notion/property/relation.js";

export const RelationProperty: RelationPropertyItemComponent = ({
  propertyItem,
}) => {
  return (
    <div id={propertyItem?.id} className="notion-property-item notion-relation">
      {propertyItem.relation?.map((item) => (
        <RelationItem key={item.id} relationItem={item} />
      ))}
    </div>
  );
};
