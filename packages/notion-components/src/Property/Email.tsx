import type { EmailPropertyItemComponent } from "../../types/notion/property/email.js";

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
