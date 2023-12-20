import { RichText } from "../RichText/RichText.js";

import type { RichTextPropertyItemComponent } from "../../types/notion/property/richText.js";

export const RichTextProperty: RichTextPropertyItemComponent = ({
  propertyItem,
}) => (
  <div id={propertyItem.id} className="notion-property-item notion-rich-text">
    <RichText richText={propertyItem.rich_text} />
  </div>
);
