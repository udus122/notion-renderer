import { selectProperties } from "../../utils.js";
import { Cover } from "../Common/Cover.js";
import { Icon } from "../Common/Icon.js";
import { Title } from "../Common/Title.js";
import { RichText } from "../index.js";

import { Gallery } from "./Gallery/Gallery.js";
import { List } from "./List/List.js";
import { Table } from "./Table/Table.js";

import type { DatabaseObject } from "../../types/notion/database.js";
import type { PageObject } from "../../types/notion/page.js";
import type { FC } from "react";

type Props = {
  database: DatabaseObject;
  pages: Array<PageObject>;
  displayProperties?: Array<string>;
  hideCover?: boolean;
  hideIcon?: boolean;
  hideTitle?: boolean;
  hideDescription?: boolean;
  viewType?: "table" | "gallery" | "list";
  theme?: "light" | "dark";
};

export const Database: FC<Props> = ({
  database,
  pages,
  displayProperties,
  hideCover = false,
  hideIcon = false,
  hideTitle = false,
  hideDescription = false,
  viewType = "table",
  theme = "light",
}) => {
  // Filter properties to display
  if (displayProperties) {
    database.properties = selectProperties(
      database.properties,
      displayProperties,
    );
    pages.forEach((page) => {
      page.properties = selectProperties(page.properties, displayProperties);
      return page;
    });
  }

  return (
    <div className={`notion-root notion-${theme}`}>
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
        {!hideDescription && (
          <div className="notion-database-description">
            <RichText richText={database.description} />
          </div>
        )}
        <div className="notion-database-collection">
          {viewType === "gallery" ? (
            <Gallery pages={pages} />
          ) : viewType === "list" ? (
            <List pages={pages} />
          ) : viewType === "table" ? (
            <Table database={database} pages={pages} />
          ) : null}
        </div>
      </div>
    </div>
  );
};
