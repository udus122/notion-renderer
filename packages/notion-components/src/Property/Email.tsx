import type { EmailPropertyItemComponent } from "@udus/notion-types";

export const EmailProperty: EmailPropertyItemComponent = ({ propertyItem }) => {
  return (
    <div id={propertyItem.id} className="notion-property-item notion-email">
      {propertyItem.email ? (
        <a href={`mailto:${propertyItem.email}`}>{propertyItem.email}</a>
      ) : (
        ""
      )}
    </div>
  );
};
