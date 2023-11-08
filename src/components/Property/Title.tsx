import { RichText } from "../RichText/RichText.js";

import type { TitlePropertyItemComponent } from "../../types/notion/pages/properties/title.js";

export const TitleProperty: TitlePropertyItemComponent = ({ propertyItem }) => (
  <h1 id={propertyItem.id} className="notion-property-item notion-title">
    <RichText richText={propertyItem.title} />
  </h1>
);
