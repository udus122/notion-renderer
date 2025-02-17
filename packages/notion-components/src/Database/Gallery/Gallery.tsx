import { Card } from "./Card";

import type { PageObject } from "@udus/notion-types";
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
