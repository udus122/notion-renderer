import { Icon } from "../../Common/Icon.js";
import { useMapper } from "../../hooks.js";

import type { PageObject } from "../../../types/notion/pages/page.js";
import type { TitlePropertyItemObject } from "../../../types/notion/pages/properties/title.js";

export const TableTitle = (
  title: TitlePropertyItemObject,
  page: PageObject
) => {
  const { Link } = useMapper();

  return (
    <div>
      <Link prefix="/" link={page.id} key={title.id}>
        {page.icon && <Icon icon={page.icon} />}
        <span className="notion-table-row-title">
          {title.title.map((x) => x.plain_text)}
        </span>
      </Link>
    </div>
  );
};
