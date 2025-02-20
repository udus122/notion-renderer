import { AnnotationItemProvider } from "../Mapper/Annotation";
import { LinkProvider } from "../Mapper/Link";
import { PropertyItemProvider } from "../Mapper/Property";
import { RichTextItemProvider } from "../Mapper/RichText";

import { CheckboxProperty } from "./Checkbox";
import { CreatedByProperty } from "./CreatedBy";
import { CreatedTimeProperty } from "./CreatedTime";
import { DateProperty } from "./Date";
import { EmailProperty } from "./Email";
import { FilesProperty } from "./Files";
import { FormulaProperty } from "./Formula";
import { LastEditedByProperty } from "./LastEditedBy";
import { LastEditedTimeProperty } from "./LastEditedTime";
import { MultiSelectProperty } from "./MultiSelect";
import { NumberProperty } from "./Number";
import { PeopleProperty } from "./People";
import { PhoneNumberProperty } from "./PhoneNumber";
import { RelationProperty } from "./Relation";
import { RichTextProperty } from "./RichText";
import { RollupProperty } from "./Rollup";
import { SelectProperty } from "./Select";
import { StatusProperty } from "./Status";
import { TitleProperty } from "./Title";
import { UniqueIdProperty } from "./UniqueId";
import { UrlProperty } from "./Url";

import type { LinkProps } from "@udus/notion-types";
import type { AnnotationItemMapper } from "@udus/notion-types";
import type { PropertyItemMapper } from "@udus/notion-types";
import type { RichTextItemMapper } from "@udus/notion-types";
import type { PropertyItemType } from "@udus/notion-types";
import type { FC } from "react";

type Props = {
  value: PropertyItemType;
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
