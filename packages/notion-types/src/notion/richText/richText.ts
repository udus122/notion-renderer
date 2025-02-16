import type { RichTextItemType } from "./richTextItem.js";
import type { LinkComponent } from "../common/link.js";
import type { AnnotationItemMapper } from "../mapper/annotationItem.js";
import type { RichTextItemMapper } from "../mapper/richTextItem.js";

export type RichTextType = Array<RichTextItemType>;

export type RichTextProps = {
  richText: RichTextType;
  richTextItemMapper?: RichTextItemMapper;
  annotationMapper?: AnnotationItemMapper;
  LinkComponent?: LinkComponent;
};

export type RichTextComponent = React.ComponentType<RichTextProps>;
