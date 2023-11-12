import { splitTitleAndOtherProperties } from "../../../utils.js";
import { Icon } from "../../Common/Icon.js";
import { useMapper } from "../../hooks.js";
import { Cover } from "../../Common/Cover.js";
import { Properties } from "../../Property/Properties.js";

import type { PageObject } from "../../../types/notion/pages/page.js";

export const Card = ({ page }: { page: PageObject }) => {
  const { Link } = useMapper();

  const { title, other } = splitTitleAndOtherProperties(page.properties);

  return (
    <div id={page.id} className="notion-gallery-card">
      <Link prefix="/" link={page.id}>
        <div className="gallery-card-cover">
          <Cover cover={page.cover} />
        </div>
        <div className="gallery-card-title">
          <span className="notion-gallery-card-title-icon">
            <Icon icon={page.icon} />
          </span>
          <span className="notion-gallery-card-title-text">
            {title?.title.map((text) => text.plain_text).join("") ??
              "Annoymous"}
          </span>
        </div>
        <div className="gallery-card-properties">
          <Properties properties={other} hidePropertyName />
        </div>
      </Link>
    </div>
  );
};
