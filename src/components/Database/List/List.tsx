import { ListItem } from "./ListItem.js";

import type { PageObject } from "../../../types/notion/pages/page.js";

export const List = ({ pages }: { pages: PageObject[] }) => {
  return (
    <div className="notion-list">
      {pages.map((page) => (
        <ListItem key={page.id} page={page} />
      ))}
    </div>
  );
};
