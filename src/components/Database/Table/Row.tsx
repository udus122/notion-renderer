import { Property } from "../../../components/Property/Property.js";
import { splitTitleAndOtherProperties } from "../../../utils.js";
import { useMapper } from "../../hooks.js";

import type { DatabaseObject } from "../../../types/notion/database.js";
import type { PageObject } from "../../../types/notion/pages/page.js";
import type { FC } from "react";

type Props = {
  database: DatabaseObject;
  page: PageObject;
  displayProperties: Array<string>;
};

export const Row: FC<Props> = ({ database, page, displayProperties }) => {
  const { Link } = useMapper();

  const { title, other } = splitTitleAndOtherProperties(page.properties);

  return (
    <tr id={page.id} className="notion-table-row">
      {displayProperties.map((key) => {
        const propertyItem = page.properties[key];
        return (
          <td>
            {propertyItem && (
              <Property
                propertyName={key}
                propertyItem={propertyItem}
                hidePropertyName
              />
            )}
          </td>
        );
      })}
    </tr>
  );
};
