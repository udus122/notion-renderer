import { extractTitle } from "../../utils.js";
import { Icon } from "../index.js";
import { useMapper } from "../Mapper/hooks.js";
import { RichText } from "../RichText/RichText.js";

import type { RelationPropertyItemComponent } from "../../types/notion/propertyItem/relation.js";

export const RelationProperty: RelationPropertyItemComponent = ({
  propertyItem,
}) => {
  const { Link } = useMapper();
  return (
    <div id={propertyItem?.id} className="notion-property-item notion-relation">
      {propertyItem.relation?.map((rel) => {
        const icon = rel.page ? rel.page.icon : null;
        const title = rel.page ? extractTitle(rel.page) : [];
        return (
          rel && (
            <Link key={rel.id} href={`/${rel.id}`}>
              <div className="notion-relation-item">
                <Icon icon={icon} />
                {title.length === 0 ? (
                  <span>Anonymous</span>
                ) : (
                  <RichText richText={title} />
                )}
              </div>
            </Link>
          )
        );
      })}
    </div>
  );
};
