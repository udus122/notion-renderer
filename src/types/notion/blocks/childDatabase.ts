import type { BlockProps } from "../common.js";
import type {
  ChildDatabaseBlockObjectResponse,
  DatabaseObjectResponse,
} from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type ChildDatabaseBlockObject = ChildDatabaseBlockObjectResponse & {
  child_database: {
    database?: DatabaseObjectResponse | null;
  };
};

export type ChildDatabaseBlockProps = BlockProps<ChildDatabaseBlockObject>;

export type ChildDatabaseBlock = ComponentType<ChildDatabaseBlockProps>;
