import type { RichTextItem } from "./richTextItem.js";
import type { LinkComponent } from "../link.js";
import type { AnnotationItemMapper } from "../mapper/annotationItem.js";
import type { RichTextItemMapper } from "../mapper/richTextItem.js";

export type RichText = Array<RichTextItem>;

export type RichTextProps = {
  richText: RichText;
  richTextItemMapper?: RichTextItemMapper;
  annotationMapper?: AnnotationItemMapper;
  LinkComponent?: LinkComponent;
};

export type RichTextComponent = React.ComponentType<RichTextProps>;
