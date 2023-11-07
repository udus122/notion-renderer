import { useMapper } from "../hooks.js";

import type { UrlPropertyItemComponent } from "../../types/notion/pages/properties/url.js";

export const UrlProperty: UrlPropertyItemComponent = ({ propertyItem }) => {
  const { Link } = useMapper();
  return (
    <Link id={propertyItem.id} className="notion-property-item notion-url">
      {propertyItem.url}
    </Link>
  );
};
