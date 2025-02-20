import { ListItem } from "./ListItem";

import type { PageObject } from "@udus/notion-types";
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
