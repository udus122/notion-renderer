import { extractTitleProperty } from "../../libs/utils.js";

import { Icon } from "./Icon.js";

import type {
  BlockComponentProps,
  BreadcrumbBlockObjectComponent,
} from "../../types/components.js";

type Props = BlockComponentProps<BreadcrumbBlockObjectComponent>;

export const Breadcrumb: React.FC<Props> = ({ block }) => {
  return (
    <div id={block.id} className="notion_breadcrumb">
      {block.breadcrumb.parents.map((pageOrDatabase, index, array) => {
        return (
          <>
            <a href={`/${pageOrDatabase.id}`}>
              <span className="notion_breadcrumb_title">
                <Icon icon={pageOrDatabase.icon} />{" "}
                {extractTitleProperty(pageOrDatabase)
                  ?.map((t) => t.plain_text)
                  .join("")}
              </span>
            </a>
            {index !== array.length - 1 && (
              <span className="notion_breadcrumb_separator">/</span>
            )}
          </>
        );
      })}
    </div>
  );
};
