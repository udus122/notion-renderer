import { Card } from "./Card.js";

import type { PageObject } from "../../../types/notion/page.js";
import type { FC } from "react";

type Props = {
  pages: Array<PageObject>;
};

export const Gallery: FC<Props> = ({ pages }) => {
  return (
    <div className="notion-gallery">
      {pages.map((page) => (
        <Card key={page.id} page={page} />
      ))}
    </div>
  );
};
