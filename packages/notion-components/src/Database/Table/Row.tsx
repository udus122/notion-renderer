import { Property } from "../../Property/Property";
import { isTitleProperty } from "@udus/notion-utils";

import { TableTitle } from "./Title";

import type { PageObject } from "@udus/notion-types";
import type { FC } from "react";

type Props = {
  page: PageObject;
};

export const Row: FC<Props> = ({ page }) => {
  return (
    <tr id={page.id} className="notion-table-row">
      {Object.entries(page.properties).map(([name, item]) => {
        return (
          item && (
            <td>
              {isTitleProperty(item) ? (
                TableTitle(item, page)
              ) : (
                <Property name={name} value={item} hideName />
              )}
            </td>
          )
        );
      })}
    </tr>
  );
};
