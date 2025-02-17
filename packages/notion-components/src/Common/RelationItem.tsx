import { extractTitle } from "../../../../src/utils/index";
import { useMapper } from "../hooks";
import { RichText } from "../RichText/RichText";

import { Icon } from "./Icon";

import type { RelationItem as RelationItemType } from "@udus/notion-types";
import type { FC } from "react";

type Props = {
  relationItem: RelationItemType;
};

export const RelationItem: FC<Props> = ({ relationItem }) => {
  const { Link } = useMapper();

  const icon = relationItem.page ? relationItem.page.icon : null;
  const title = relationItem.page ? extractTitle(relationItem.page) : [];
  return (
    <Link key={relationItem.id} prefix="/" link={relationItem.id}>
      <div className="notion-relation-item">
        <Icon icon={icon} />
        {title.length === 0 ? (
          <span>Anonymous</span>
        ) : (
          <RichText richText={title} />
        )}
      </div>
    </Link>
  );
};
