import { AnnotationItemProvider } from "../Mapper/Annotation";
import { LinkProvider } from "../Mapper/Link";
import { RichTextItemProvider } from "../Mapper/RichText";

import { RichTextItem } from "./RichTextItem";

import type { RichTextComponent } from "@udus/notion-types";

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
