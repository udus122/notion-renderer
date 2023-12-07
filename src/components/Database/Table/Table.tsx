import { Header } from "./Header.js";
import { Row } from "./Row.js";

import type { DatabaseObject } from "../../../types/notion/database.js";
import type { PageObject } from "../../../types/notion/pages/page.js";
import type { FC } from "react";

type Props = {
  database: DatabaseObject;
  pages: Array<PageObject>;
};

export const Table: FC<Props> = ({ database, pages }) => {
  return (
    <table className="notion-table">
      <thead>
        <Header database={database} />
      </thead>
      <tbody>
        {pages.map((page) => {
          return <Row key={page.id} page={page} />;
        })}
      </tbody>
    </table>
  );
};
