import type { UrlPropertyItemComponent } from "@udus/notion-types";

export const UrlProperty: UrlPropertyItemComponent = ({ propertyItem }) => {
  return (
    <div id={propertyItem.id} className="notion-property-item notion-url">
      <a href={propertyItem.url ?? ""}>{propertyItem.url}</a>
    </div>
  );
};
