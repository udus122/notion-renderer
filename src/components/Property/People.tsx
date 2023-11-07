import { isFullUser } from "@notionhq/client";

import type { PeoplePropertyItemComponent } from "../../types/notion/pages/properties/people.js";

export const PeopleProperty: PeoplePropertyItemComponent = ({
  propertyItem,
}) => {
  return (
    <div id={propertyItem.id} className="notion-property-item notion-people">
      {propertyItem.people.map((person) => {
        if (isFullUser(person)) {
          return <span key={person.id}>{person.name}</span>;
        }
        return null;
      })}
    </div>
  );
};
