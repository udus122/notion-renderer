import { isFullUser } from "@notionhq/client";

import type { CreatedByPropertyItemComponent } from "../../types/notion/propertyItem/createdBy.js";

export const CreatedByProperty: CreatedByPropertyItemComponent = ({
  propertyItem,
}) => {
  return (
    <div id={propertyItem.id} className="notion-property-item notion-people">
      {isFullUser(propertyItem.created_by) ? (
        <span key={propertyItem.created_by.id}>
          {propertyItem.created_by.name}
        </span>
      ) : null}
    </div>
  );
};
