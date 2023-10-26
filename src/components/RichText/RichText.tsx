import { AnnotationProvider } from "../Mapper/Annotation.js";
import { LinkProvider } from "../Mapper/Link.js";
import { RichTextItemProvider } from "../Mapper/RichText.js";

import { RichTextItem } from "./RichTextItem.js";

import type { LinkProps } from "../Link.js";
import type { RichTextItem as RichTextItemType } from "../../types/notion.js";

export type RichTextProps<T extends RichTextItemType> = {
  richText: T;
};

type Props = {
  richText: Array<RichTextItemType>;
  richTextItemMapper?: object;
  annotationMapper?: object;
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
        <AnnotationProvider mapper={annotationMapper}>
          <LinkProvider link={LinkComponent}>
            {richText.map((item, index) => (
              <RichTextItem
                key={item?.id ?? `${index}-${item.plain_text}`}
                richText={item}
              />
            ))}
          </LinkProvider>
        </AnnotationProvider>
      </RichTextItemProvider>
    </span>
  );
};
