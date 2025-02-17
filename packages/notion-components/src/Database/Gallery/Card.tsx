import { splitTitleAndOtherProperties } from "../../../../../src/utils/index";
import { Cover } from "../../Common/Cover";
import { Icon } from "../../Common/Icon";
import { useMapper } from "../../hooks";
import { Properties } from "../../Property/Properties";

import type { PageObject } from "@udus/notion-types";
import type { FC } from "react";

type Props = {
  page: PageObject;
};

export const Card: FC<Props> = ({ page }) => {
  const { Link } = useMapper();

  const { title, other } = splitTitleAndOtherProperties(page.properties);

  return (
    <div id={page.id} className="notion-gallery-card">
      <Link prefix="/" link={page.id} />
      <div className="notion-gallery-card-cover">
        <Cover cover={page.cover} />
      </div>
      <div className="notion-gallery-card-title">
        <span className="notion-gallery-card-title-icon">
          <Icon icon={page.icon} hideDefaultIcon />
        </span>
        <span className="notion-gallery-card-title-text">
          {title?.title.map((text) => text.plain_text).join("") ?? "Annoymous"}
        </span>
      </div>
      <div className="notion-gallery-card-properties">
        <Properties properties={other} hidePropertyName />
      </div>
    </div>
  );
};
