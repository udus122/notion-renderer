import { Row } from "./Row.js";

import type { PageObject } from "../../../types/notion/pages/page.js";
import type { FC } from "react";
import type { DatabaseObject } from "src/types/notion/database.js";

type Props = {
  database: DatabaseObject;
  pages: Array<PageObject>;
  displayProperties?: Array<string>;
};

export const Table: FC<Props> = ({
  database,
  pages,
  displayProperties = [
    "Name",
    "Status",
    "Tags",
    "Created time",
    "Last edited time",
    "Related Child database",
  ],
}) => {
  return (
    <table className="notion-table">
      <thead>
        <tr>
          {displayProperties.map((name) => (
            <th>
              <div>{name}</div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {pages.map((page) => (
          <Row
            key={page.id}
            database={database}
            page={page}
            displayProperties={displayProperties}
          />
        ))}
      </tbody>
    </table>
  );
};
