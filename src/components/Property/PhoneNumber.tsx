import { useMapper } from "../Mapper/hooks.js";

import type { PhoneNumberPropertyItemComponent } from "../../types/notion/pages/properties/phoneNumber.js";

export const PhoneNumberProperty: PhoneNumberPropertyItemComponent = ({
  propertyItem,
}) => {
  const { Link } = useMapper();
  return (
    <div
      id={propertyItem.id}
      className="notion-property-item notion-phone-number"
    >
      {propertyItem.phone_number ? (
        <Link href={`tel:${propertyItem.phone_number}`}>
          {propertyItem.phone_number}
        </Link>
      ) : (
        ""
      )}
    </div>
  );
};
