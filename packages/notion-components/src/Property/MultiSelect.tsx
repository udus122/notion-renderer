import type { MultiSelectPropertyItemComponent } from "@udus/notion-types";

export const MultiSelectProperty: MultiSelectPropertyItemComponent = ({
  propertyItem,
}) => {
  return (
    <div
      id={propertyItem.id}
      className="notion-property-item notion-multi-select"
    >
      {propertyItem.multi_select.map((select) => (
        <div key={select.id} className={`notion-pill notion-pill-color-${select.color}`}>
          {select.name}
        </div>
      ))}
    </div>
  );
};
