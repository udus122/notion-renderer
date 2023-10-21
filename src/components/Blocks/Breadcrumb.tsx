import { Fragment } from "react";

import { extractTitleProperty } from "../../libs/notion/util.js";

import { useMapper } from "./mapper.js";
import { Icon } from "./Icon.js";

import type {
  BreadcrumbBlockObjectResponse,
  PageObjectResponse,
  DatabaseObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockProps, Overwrite } from "src/types/utils.js";

export type BreadcrumbBlockObject = Overwrite<
  BreadcrumbBlockObjectResponse,
  {
    breadcrumb: {
      parents: Array<PageObjectResponse | DatabaseObjectResponse>;
    };
  }
>;
type Props = BlockProps<BreadcrumbBlockObject>;

export const Breadcrumb: React.FC<Props> = ({ block }) => {
  const { Link } = useMapper();
  return (
    <div id={block.id} className="notion_breadcrumb">
      {block.breadcrumb.parents.map((pageOrDatabase, index, array) => {
        return (
          <Fragment key={pageOrDatabase.id}>
            <Link href={`/${pageOrDatabase.id}`}>
              <span className="notion_breadcrumb_title">
                <Icon icon={pageOrDatabase.icon} />{" "}
                {extractTitleProperty(pageOrDatabase)
                  ?.map((t) => t.plain_text)
                  .join("")}
              </span>
            </Link>
            {index !== array.length - 1 && (
              <span className="notion_breadcrumb_separator">/</span>
            )}
          </Fragment>
        );
      })}
    </div>
  );
};
