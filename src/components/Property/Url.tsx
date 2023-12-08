import type { UrlPropertyItemComponent } from "../../types/notion/pages/properties/url.js";

export const UrlProperty: UrlPropertyItemComponent = ({ propertyItem }) => {
  return (
    <div id={propertyItem.id} className="notion-property-item notion-url">
      <a className="notion-link" href={propertyItem.url ?? ""}>
        {propertyItem.url}
      </a>
    </div>
  );
};
