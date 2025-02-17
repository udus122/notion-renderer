import { splitTitleAndOtherProperties } from "../../../../../src/utils/index";
import { Icon } from "../../Common/Icon";
import { useMapper } from "../../hooks";
import { Properties } from "../../Property/Properties";

import type { PageObject } from "@udus/notion-types";
import type { FC } from "react";

type Props = {
  page: PageObject;
};

export const ListItem: FC<Props> = ({ page }) => {
  const { Link } = useMapper();

  const { title, other } = splitTitleAndOtherProperties(page.properties);

  return (
    <div id={page.id} className="notion-list-item">
      <Link prefix="/" link={page.id}>
        <div className="notion-list-item-title">
          <span className="notion-list-item-title-icon">
            <Icon icon={page.icon} />
          </span>
          <span className="notion-list-item-title-text">
            {title?.title.map((text) => text.plain_text).join("") ??
              "Annoymous"}
          </span>
        </div>
        <div className="notion-list-item-properties">
          <Properties properties={other} hidePropertyName />
        </div>
      </Link>
    </div>
  );
};
