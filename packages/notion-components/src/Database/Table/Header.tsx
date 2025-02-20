import { PropertyName } from "../../Property/PropertyName";

import type { DatabaseObject } from "@udus/notion-types";
import type { FC } from "react";

type Props = {
  database: DatabaseObject;
};

export const Header: FC<Props> = ({ database }) => {
  return (
    <tr>
      {Object.entries(database.properties).map(([name, item]) => {
        return (
          item && (
            <th>
              <PropertyName name={name} value={item} />
            </th>
          )
        );
      })}
    </tr>
  );
};
