import { AnnotationItemProvider } from "../Mapper/Annotation.js";
import { LinkProvider } from "../Mapper/Link.js";
import { PropertyItemProvider } from "../Mapper/Property.js";
import { RichTextItemProvider } from "../Mapper/RichText.js";

import { CheckboxProperty } from "./Checkbox.js";
import { CreatedByProperty } from "./CreatedBy.js";
import { CreatedTimeProperty } from "./CreatedTime.js";
import { DateProperty } from "./Date.js";
import { EmailProperty } from "./Email.js";
import { FilesProperty } from "./Files.js";
import { FormulaProperty } from "./Formula.js";
import { LastEditedByProperty } from "./LastEditedBy.js";
import { LastEditedTimeProperty } from "./LastEditedTime.js";
import { MultiSelectProperty } from "./MultiSelect.js";
import { NumberProperty } from "./Number.js";
import { PeopleProperty } from "./People.js";
import { PhoneNumberProperty } from "./PhoneNumber.js";
import { RelationProperty } from "./Relation.js";
import { RichTextProperty } from "./RichText.js";
import { RollupProperty } from "./Rollup.js";
import { SelectProperty } from "./Select.js";
import { StatusProperty } from "./Status.js";
import { TitleProperty } from "./Title.js";
import { UniqueIdProperty } from "./UniqueId.js";
import { UrlProperty } from "./Url.js";

import type { LinkProps } from "../../types/notion/common/link.js";
import type { AnnotationItemMapper } from "../../types/notion/mapper/annotationItem.js";
import type { PropertyItemMapper } from "../../types/notion/mapper/propertyItem.js";
import type { RichTextItemMapper } from "../../types/notion/mapper/richTextItem.js";
import type { PropertyItem as PropertyValueType } from "../../types/notion/property/properties.js";
import type { FC } from "react";

type Props = {
  value: PropertyValueType;
  propertyMapper?: PropertyItemMapper;
  richTextItemMapper?: RichTextItemMapper;
  annotationMapper?: AnnotationItemMapper;
  LinkComponent?: React.ComponentType<LinkProps>;
};

export const PropertyItem: FC<Props> = ({
  value,
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
            <PropertyItemSwitcher value={value} />
          </LinkProvider>
        </AnnotationItemProvider>
      </RichTextItemProvider>
    </PropertyItemProvider>
  );
};

const PropertyItemSwitcher: FC<Props> = ({ value: property }) => {
  if (!property) return null;

  const mapper = {
    checkbox: CheckboxProperty,
    created_by: CreatedByProperty,
    created_time: CreatedTimeProperty,
    date: DateProperty,
    email: EmailProperty,
    files: FilesProperty,
    formula: FormulaProperty,
    last_edited_by: LastEditedByProperty,
    last_edited_time: LastEditedTimeProperty,
    multi_select: MultiSelectProperty,
    number: NumberProperty,
    people: PeopleProperty,
    phone_number: PhoneNumberProperty,
    relation: RelationProperty,
    rich_text: RichTextProperty,
    rollup: RollupProperty,
    select: SelectProperty,
    status: StatusProperty,
    title: TitleProperty,
    unique_id: UniqueIdProperty,
    url: UrlProperty,
  };

  switch (property.type) {
    case "checkbox": {
      const PropertyComponent = mapper[property.type];
      return <PropertyComponent propertyItem={property} />;
    }
    case "created_time": {
      const PropertyComponent = mapper[property.type];
      return <PropertyComponent propertyItem={property} />;
    }
    case "created_by": {
      const PropertyComponent = mapper[property.type];
      return <PropertyComponent propertyItem={property} />;
    }
    case "date": {
      const PropertyComponent = mapper[property.type];
      return <PropertyComponent propertyItem={property} />;
    }
    case "email": {
      const PropertyComponent = mapper[property.type];
      return <PropertyComponent propertyItem={property} />;
    }
    case "files": {
      const PropertyComponent = mapper[property.type];
      return <PropertyComponent propertyItem={property} />;
    }
    case "formula": {
      const PropertyComponent = mapper[property.type];
      return <PropertyComponent propertyItem={property} />;
    }
    case "last_edited_by": {
      const PropertyComponent = mapper[property.type];
      return <PropertyComponent propertyItem={property} />;
    }
    case "last_edited_time": {
      const PropertyComponent = mapper[property.type];
      return <PropertyComponent propertyItem={property} />;
    }
    case "relation": {
      const PropertyComponent = mapper[property.type];
      return <PropertyComponent propertyItem={property} />;
    }
    case "rich_text": {
      const PropertyComponent = mapper[property.type];
      return <PropertyComponent propertyItem={property} />;
    }
    case "rollup": {
      const PropertyComponent = mapper[property.type];
      return <PropertyComponent propertyItem={property} />;
    }
    case "multi_select": {
      const PropertyComponent = mapper[property.type];
      return <PropertyComponent propertyItem={property} />;
    }
    case "number": {
      const PropertyComponent = mapper[property.type];
      return <PropertyComponent propertyItem={property} />;
    }
    case "people": {
      const PropertyComponent = mapper[property.type];
      return <PropertyComponent propertyItem={property} />;
    }
    case "phone_number": {
      const PropertyComponent = mapper[property.type];
      return <PropertyComponent propertyItem={property} />;
    }
    case "select": {
      const PropertyComponent = mapper[property.type];
      return <PropertyComponent propertyItem={property} />;
    }
    case "status": {
      const PropertyComponent = mapper[property.type];
      return <PropertyComponent propertyItem={property} />;
    }
    case "title": {
      const PropertyComponent = mapper[property.type];
      return <PropertyComponent propertyItem={property} />;
    }
    case "unique_id": {
      const PropertyComponent = mapper[property.type];
      return <PropertyComponent propertyItem={property} />;
    }
    case "url": {
      const PropertyComponent = mapper[property.type];
      return <PropertyComponent propertyItem={property} />;
    }
    default: {
      // @ts-expect-error: to log when an unexpected 'property.type' is encountered, which is not in the type.
      console.warn(`${property.type as { type: never }} is not supported.`);
      return null;
    }
  }
};
