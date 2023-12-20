import type { CheckboxPropertyItemComponent } from "../property/checkbox.js";
import type { RichTextPropertyItemComponent } from "../property/richText.js";
import type { TitlePropertyItemComponent } from "../property/title.js";

export type PropertyItemMapper = Partial<{
  checkbox: CheckboxPropertyItemComponent;
  rich_text: RichTextPropertyItemComponent;
  title: TitlePropertyItemComponent;
}>;
