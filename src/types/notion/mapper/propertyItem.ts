import type { CheckboxPropertyItemComponent } from "../propertyItem/checkbox.js";
import type { RichTextPropertyItemComponent } from "../propertyItem/richText.js";
import type { TitlePropertyItemComponent } from "../propertyItem/title.js";

export type PropertyItemMapper = Partial<{
  checkbox: CheckboxPropertyItemComponent;
  rich_text: RichTextPropertyItemComponent;
  title: TitlePropertyItemComponent;
}>;
