import { ListItem } from "./ListItem.js";

import type { PageObject } from "../../../types/notion/page.js";
import type { FC } from "react";

type Props = {
  pages: Array<PageObject>;
};

export const List: FC<Props> = ({ pages }) => {
  return (
    <div className="notion-list">
      {pages.map((page) => (
        <ListItem key={page.id} page={page} />
      ))}
    </div>
  );
};
