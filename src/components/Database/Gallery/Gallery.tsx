import { Card } from "./Card.js";

import type { PageObject } from "../../../types/notion/pages/page.js";

export const Gallery = ({ pages }: { pages: PageObject[] }) => {
  return (
    <div className="notion-gallery">
      {pages.map((page) => (
        <Card key={page.id} page={page} />
      ))}
    </div>
  );
};
