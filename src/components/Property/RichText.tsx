import { RichText } from "../RichText/RichText.js";

import type { RichTextPropertyItemComponent } from "../../types/notion/propertyItem/richText.js";

export const RichTextProperty: RichTextPropertyItemComponent = ({
  propertyItem,
}) => (
  <span id={propertyItem.id} className="notion-property-item notion-rich-text">
    <RichText richText={propertyItem.rich_text} />
  </span>
);
