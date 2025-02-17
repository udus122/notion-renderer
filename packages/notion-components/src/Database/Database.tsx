import { selectProperties } from "@udus/notion-utils";
import { Cover } from "../Common/Cover";
import { Icon } from "../Common/Icon";
import { Title } from "../Common/Title";
import { RichText } from "../index";

import { Gallery } from "./Gallery/Gallery";
import { List } from "./List/List";
import { Table } from "./Table/Table";

import type { DatabaseObject, PageObject } from "@udus/notion-types";
import type {  } from "@udus/notion-types";
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
}) => {
  // Filter properties to display
  if (displayProperties) {
    database.properties = selectProperties(
      database.properties,
      displayProperties,
    );
    for (const page of pages) {
      page.properties = selectProperties(page.properties, displayProperties);
    }
  }

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
  );
};
