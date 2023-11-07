import { RelationItem } from "../Common/RelationItem.js";
import { useMapper } from "../Mapper/hooks.js";

import type { RelationPropertyItemComponent } from "../../types/notion/property/relation.js";

export const RelationProperty: RelationPropertyItemComponent = ({
  propertyItem,
}) => {
  const { Link } = useMapper();

  return (
    <div id={propertyItem?.id} className="notion-property-item notion-relation">
      {propertyItem.relation?.map((item) => (
        <Link key={item.id} href={`/${item.id}`}>
          <RelationItem key={item.id} relationItem={item} />
        </Link>
      ))}
    </div>
  );
};
