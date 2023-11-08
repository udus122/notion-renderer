import { AnnotationItemProvider } from "../Mapper/Annotation.js";
import { LinkProvider } from "../Mapper/Link.js";
import { RichTextItemProvider } from "../Mapper/RichText.js";

import { RichTextItem } from "./RichTextItem.js";

import type { RichTextComponent } from "../../types/notion/richText/richText.js";

export const RichText: RichTextComponent = ({
  richText,
  richTextItemMapper,
  annotationMapper,
  LinkComponent,
}) => {
  if (!richText) return null;

  return (
    <span className="notion-rich-text">
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
