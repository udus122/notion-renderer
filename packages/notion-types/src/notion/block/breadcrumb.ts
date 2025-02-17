import type { BlockBlockProps } from "./block";
import type { Overwrite } from "../../utils";
import type {
  BreadcrumbBlockObjectResponse,
  DatabaseObjectResponse,
  PageObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type BreadcrumbBlockObject = Overwrite<
  BreadcrumbBlockObjectResponse,
  {
    breadcrumb: {
      parents: Array<PageObjectResponse | DatabaseObjectResponse>;
    };
  }
>;

export type BreadcrumbBlockProps = BlockBlockProps<BreadcrumbBlockObject>;

export type BreadcrumbBlock = ComponentType<BreadcrumbBlockProps>;
