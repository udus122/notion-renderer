import { Icon } from "../../Common/Icon";
import { useMapper } from "../../hooks";

import type { PageObject } from "@udus/notion-types";
import type { TitlePropertyItemObject } from "@udus/notion-types";

export const TableTitle = (
  title: TitlePropertyItemObject,
  page: PageObject,
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
