import { RichText } from "../RichText/RichText";

import type { RichTextPropertyItemComponent } from "@udus/notion-types";

export const RichTextProperty: RichTextPropertyItemComponent = ({
  propertyItem,
}) => (
  <div id={propertyItem.id} className="notion-property-item notion-rich-text">
    <RichText richText={propertyItem.rich_text} />
  </div>
);
