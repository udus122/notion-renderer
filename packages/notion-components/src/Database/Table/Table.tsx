import { Header } from "./Header";
import { Row } from "./Row";

import type { DatabaseObject, PageObject } from "@udus/notion-types";
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
