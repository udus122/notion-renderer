import { RelationItem } from "../Common/RelationItem";

import type { RelationPropertyItemComponent } from "@udus/notion-types";

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
