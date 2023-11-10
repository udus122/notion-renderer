import type { EmailPropertyItemComponent } from "../../types/notion/pages/properties/email.js";

export const EmailProperty: EmailPropertyItemComponent = ({ propertyItem }) => {
  return (
    <div id={propertyItem.id} className="notion-property-item notion-email">
      {propertyItem.email ? (
        <a className="notion-link" href={`mailto:${propertyItem.email}`}>
          {propertyItem.email}
        </a>
      ) : (
        ""
      )}
    </div>
  );
};
