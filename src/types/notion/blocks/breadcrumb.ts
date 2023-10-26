import type { Overwrite } from "../../utils.js";
import type { BlockProps } from "../common.js";
import type {
  BreadcrumbBlockObjectResponse,
  DatabaseObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type BreadcrumbBlockObject = Overwrite<
  BreadcrumbBlockObjectResponse,
  {
    breadcrumb: {
      parents: Array<PageObjectResponse | DatabaseObjectResponse>;
    };
  }
>;

export type BreadcrumbBlockProps = BlockProps<BreadcrumbBlockObject>;

export type BreadcrumbBlock = ComponentType<BreadcrumbBlockProps>;
