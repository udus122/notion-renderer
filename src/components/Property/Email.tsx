import { useMapper } from "../Mapper/hooks.js";

import type { EmailPropertyItemComponent } from "../../types/notion/pages/properties/email.js";

export const EmailProperty: EmailPropertyItemComponent = ({ propertyItem }) => {
  const { Link } = useMapper();
  return (
    <div id={propertyItem.id} className="notion-property-item notion-email">
      {propertyItem.email ? (
        <Link href={`mailto:${propertyItem.email}`}>{propertyItem.email}</Link>
      ) : (
        ""
      )}
    </div>
  );
};
