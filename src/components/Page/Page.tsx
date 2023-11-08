import { splitTitleAndOtherProperties } from "../../utils.js";
import { Icon } from "../Common/Icon.js";
import { Properties } from "../Property/Properties.js";

import { Cover } from "./Cover.js";
import { Title } from "./Title.js";

import type { PageObject } from "../../types/notion/pages/page.js";
import type { ComponentType } from "react";

type Props = {
  page: PageObject;
};

type PageComponent = ComponentType<Props>;

export const Page: PageComponent = ({ page }) => {
  const { title, other } = splitTitleAndOtherProperties(page.properties);

  return (
    <div id={page.id} className="notion-page">
      <Cover cover={page.cover} />
      <div>
        <Icon icon={page.icon} />
        <Title title={title.title} />
        <Properties properties={other} />
      </div>
    </div>
  );
};
