import type { CheckboxPropertyItemComponent } from "../property/checkbox";
import type { RichTextPropertyItemComponent } from "../property/richText";
import type { TitlePropertyItemComponent } from "../property/title";

export type PropertyItemMapper = Partial<{
  checkbox: CheckboxPropertyItemComponent;
  rich_text: RichTextPropertyItemComponent;
  title: TitlePropertyItemComponent;
}>;
