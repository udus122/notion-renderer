import { Property } from "../../../components/Property/Property.js";
import { isTitleProperty } from "../../../utils.js";

import { TableTitle } from "./Title.js";

import type { PageObject } from "../../../types/notion/page.js";
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
