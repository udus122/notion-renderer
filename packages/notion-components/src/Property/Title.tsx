import { RichText } from "../RichText/RichText";

import type { TitlePropertyItemComponent } from "@udus/notion-types";

export const TitleProperty: TitlePropertyItemComponent = ({ propertyItem }) => (
  <h1 id={propertyItem.id} className="notion-property-item notion-title">
    <RichText richText={propertyItem.title} />
  </h1>
);
