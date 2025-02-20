import type { RichTextItemType } from "./richTextItem";
import type { LinkComponent } from "../common/link";
import type { AnnotationItemMapper } from "../mapper/annotationItem";
import type { RichTextItemMapper } from "../mapper/richTextItem";

export type RichTextType = Array<RichTextItemType>;

export type RichTextProps = {
  richText: RichTextType;
  richTextItemMapper?: RichTextItemMapper;
  annotationMapper?: AnnotationItemMapper;
  LinkComponent?: LinkComponent;
};

export type RichTextComponent = React.ComponentType<RichTextProps>;
