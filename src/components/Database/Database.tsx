import { Cover } from "../Common/Cover.js";
import { Icon } from "../Common/Icon.js";
import { Title } from "../Common/Title.js";

import { Gallery } from "./Gallery/Gallery.js";
import { List } from "./List/List.js";

import type { DatabaseObject } from "../../types/notion/database.js";
import type { PageObject } from "../../types/notion/pages/page.js";
import type { ComponentType } from "react";

type Props = {
  database: DatabaseObject;
  pages: Array<PageObject>;
  hideCover?: boolean;
  hideIcon?: boolean;
  hideTitle?: boolean;
  viewType?: "table" | "gallery" | "list";
};

type DatabaseComponent = ComponentType<Props>;

export const Database: DatabaseComponent = ({
  database,
  pages,
  hideCover = false,
  hideIcon = false,
  hideTitle = false,
  viewType,
}) => {
  return (
    <div id={database.id} className="notion-database">
      {!hideCover && (
        <div className="notion-database-cover">
          <Cover cover={database.cover} />
        </div>
      )}
      {!hideIcon && (
        <div className="notion-database-icon">
          <Icon icon={database.icon} />
        </div>
      )}
      {!hideTitle && (
        <div className="notion-database-title">
          <Title title={database.title} />
        </div>
      )}
      {viewType === "gallery" ? (
        <Gallery pages={pages} />
      ) : viewType === "list" ? (
        <List pages={pages} />
      ) : viewType === "table" ? (
        <div>Table</div>
      ) : null}
    </div>
  );
};
