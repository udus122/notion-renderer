import { Cover } from "../Common/Cover.js";
import { Icon } from "../Common/Icon.js";
import { Title } from "../Common/Title.js";

import { Gallery } from "./Gallery/Gallery.js";

import type { DatabaseObject } from "../../types/notion/database.js";
import type { PageObject } from "../../types/notion/pages/page.js";
import type { ComponentType } from "react";

type Props = {
  database: DatabaseObject;
  pages: Array<PageObject>;
};

type DatabaseComponent = ComponentType<Props>;

export const Database: DatabaseComponent = ({ database, pages }) => {
  return (
    <div id={database.id} className="notion-database">
      <div className="notion-database-cover">
        <Cover cover={database.cover} />
      </div>
      <div className="notion-database-contents">
        <div className="notion-database-icon">
          <Icon icon={database.icon} />
        </div>
        <div className="notion-database-title">
          <Title title={database.title} />
        </div>
        <Gallery pages={pages} />
      </div>
    </div>
  );
};
