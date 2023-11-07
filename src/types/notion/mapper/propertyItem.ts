import type { CheckboxPropertyItemComponent } from "../pages/properties/checkbox.js";
import type { RichTextPropertyItemComponent } from "../pages/properties/richText.js";
import type { TitlePropertyItemComponent } from "../pages/properties/title.js";

export type PropertyItemMapper = Partial<{
  checkbox: CheckboxPropertyItemComponent;
  rich_text: RichTextPropertyItemComponent;
  title: TitlePropertyItemComponent;
}>;
