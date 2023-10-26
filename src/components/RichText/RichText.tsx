import { AnnotationItemProvider } from "../Mapper/Annotation.js";
import { LinkProvider } from "../Mapper/Link.js";
import { RichTextItemProvider } from "../Mapper/RichText.js";

import { RichTextItem } from "./RichTextItem.js";

import type { LinkProps } from "../../types/notion/link.js";
import type { AnnotationItemMapper } from "../../types/notion/mapper/annotationItem.js";
import type { RichTextItemMapper } from "../../types/notion/mapper/richTextItem.js";
import type { RichTextItem as RichTextItemType } from "../../types/notion/richText/richTextItem.js";

type Props = {
  richText: Array<RichTextItemType>;
  richTextItemMapper?: RichTextItemMapper;
  annotationMapper?: AnnotationItemMapper;
  LinkComponent?: React.ComponentType<LinkProps>;
};

export const RichText: React.FC<Props> = ({
  richText,
  richTextItemMapper,
  annotationMapper,
  LinkComponent,
}) => {
  if (!richText) return null;

  return (
    <span className="notion_rich_text">
      <RichTextItemProvider mapper={richTextItemMapper}>
        <AnnotationItemProvider mapper={annotationMapper}>
          <LinkProvider link={LinkComponent}>
            {richText.map((item, index) => (
              <RichTextItem
                key={item?.id ?? `${index}-${item.plain_text}`}
                richText={item}
              />
            ))}
          </LinkProvider>
        </AnnotationItemProvider>
      </RichTextItemProvider>
    </span>
  );
};
