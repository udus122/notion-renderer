import type { PhoneNumberPropertyItemComponent } from "../../types/notion/pages/properties/phoneNumber.js";

export const PhoneNumberProperty: PhoneNumberPropertyItemComponent = ({
  propertyItem,
}) => {
  return (
    <div
      id={propertyItem.id}
      className="notion-property-item notion-phone-number"
    >
      {propertyItem.phone_number ? (
        <a className="notion-link" href={`tel:${propertyItem.phone_number}`}>
          {propertyItem.phone_number}
        </a>
      ) : (
        ""
      )}
    </div>
  );
};
