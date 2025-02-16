import type { UrlPropertyItemComponent } from "../../types/notion/property/url.js";

export const UrlProperty: UrlPropertyItemComponent = ({ propertyItem }) => {
  return (
    <div id={propertyItem.id} className="notion-property-item notion-url">
      <a href={propertyItem.url ?? ""}>{propertyItem.url}</a>
    </div>
  );
};
