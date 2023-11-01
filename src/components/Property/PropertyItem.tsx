import { AnnotationItemProvider } from "../Mapper/Annotation.js";
import { LinkProvider } from "../Mapper/Link.js";
import { PropertyItemProvider } from "../Mapper/Property.js";
import { RichTextItemProvider } from "../Mapper/RichText.js";

import { CheckboxProperty } from "./Checkbox.js";
import { RichTextProperty } from "./RichText.js";
import { TitleProperty } from "./Title.js";

import type { LinkProps } from "../../types/notion/link.js";
import type { AnnotationItemMapper } from "../../types/notion/mapper/annotationItem.js";
import type { PropertyItemMapper } from "../../types/notion/mapper/propertyItem.js";
import type { RichTextItemMapper } from "../../types/notion/mapper/richTextItem.js";
import type { PropertyItemObject } from "../../types/notion/propertyItem/propertyItem.js";
import type { FC } from "react";

type Props = {
  property: PropertyItemObject;
  propertyMapper?: PropertyItemMapper;
  richTextItemMapper?: RichTextItemMapper;
  annotationMapper?: AnnotationItemMapper;
  LinkComponent?: React.ComponentType<LinkProps>;
};

export const PropertyItem: FC<Props> = ({
  property,
  propertyMapper,
  richTextItemMapper,
  annotationMapper,
  LinkComponent,
}) => {
  return (
    <PropertyItemProvider mapper={propertyMapper}>
      <RichTextItemProvider mapper={richTextItemMapper}>
        <AnnotationItemProvider mapper={annotationMapper}>
          <LinkProvider link={LinkComponent}>
            <PropertyItemSwitcher property={property} />
          </LinkProvider>
        </AnnotationItemProvider>
      </RichTextItemProvider>
    </PropertyItemProvider>
  );
};

const PropertyItemSwitcher: FC<Props> = ({ property }) => {
  if (!property) return null;

  const mapper = {
    checkbox: CheckboxProperty,
    rich_text: RichTextProperty,
    title: TitleProperty,
  };

  console.log("property:", JSON.stringify(property, null, 2));

  switch (property.type) {
    case "checkbox": {
      const PropertyComponent = mapper[property.type];
      return <PropertyComponent propertyItem={property} />;
    }
    case "rich_text": {
      const PropertyComponent = mapper[property.type];
      return <PropertyComponent propertyItem={property} />;
    }
    case "title": {
      const PropertyComponent = mapper[property.type];
      return <PropertyComponent propertyItem={property} />;
    }
    default: {
      // @ts-expect-error: to log when an unexpected 'property.type' is encountered, which is not in the type.
      console.warn(`${property.type as { type: never }} is never.`);
      return null;
    }
  }
};
