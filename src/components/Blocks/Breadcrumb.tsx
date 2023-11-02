import { Fragment } from "react";

import { extractTitle } from "../../utils.js";
import { Icon } from "../Common/Icon.js";
import { useMapper } from "../Mapper/hooks.js";
import { RichText } from "../RichText/RichText.js";

import type { BreadcrumbBlock } from "../../types/notion/blocks/breadcrumb.js";

export const Breadcrumb: BreadcrumbBlock = ({ block }) => {
  const { Link } = useMapper();

  return (
    <div id={block.id} className="notion-block notion-breadcrumb">
      {block.breadcrumb.parents.map((pageOrDatabase, index, array) => {
        const titleRichText = extractTitle(pageOrDatabase);

        return (
          <Fragment key={pageOrDatabase.id}>
            <Link href={`/${pageOrDatabase.id}`}>
              <span className="notion-breadcrumb-title">
                <Icon icon={pageOrDatabase.icon} />{" "}
                <RichText richText={titleRichText} />
              </span>
            </Link>
            {index !== array.length - 1 && (
              <span className="notion-breadcrumb-separator">/</span>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};
