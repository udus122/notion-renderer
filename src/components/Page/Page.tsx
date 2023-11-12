import { splitTitleAndOtherProperties } from "../../utils.js";
import { Cover } from "../Common/Cover.js";
import { Icon } from "../Common/Icon.js";
import { Title } from "../Common/Title.js";
import { Properties } from "../Property/Properties.js";

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
      <div className="notion-page-cover">
        <Cover cover={page.cover} />
      </div>
      <div className="notion-page-contents">
        <div className="notion-page-icon">
          <Icon icon={page.icon} />
        </div>
        <div className="notion-page-title">
          <Title title={title?.title ?? []} />
        </div>
        <div className="notion-page-properties">
          <Properties properties={other} />
        </div>
      </div>
    </div>
  );
};
