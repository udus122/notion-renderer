import { extractTitle } from "../../utils.js";
import { useMapper } from "../hooks.js";
import { RichText } from "../RichText/RichText.js";

import { Icon } from "./Icon.js";

import type { RelationItem as RelationItemType } from "../../types/notion/property/relation.js";
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
