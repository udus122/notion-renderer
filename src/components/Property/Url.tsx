import type { UrlPropertyItemComponent } from "../../types/notion/pages/properties/url.js";

export const UrlProperty: UrlPropertyItemComponent = ({ propertyItem }) => {
  return (
    <a
      id={propertyItem.id}
      className="notion-property-item notion-url"
      href={propertyItem.url ?? ""}
    >
      {propertyItem.url}
    </a>
  );
};
