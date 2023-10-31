import type { BlockBlockProps } from "./block.js";
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

export type ChildDatabaseBlockProps = BlockBlockProps<ChildDatabaseBlockObject>;

export type ChildDatabaseBlock = ComponentType<ChildDatabaseBlockProps>;
