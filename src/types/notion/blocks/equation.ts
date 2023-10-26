import type { BlockProps } from "../common.js";
import type { EquationBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type EquationBlockObject = EquationBlockObjectResponse & {
  equation: {
    expression: string;
  };
};

export type EquationBlockProps = BlockProps<EquationBlockObject>;

export type EquationBlock = ComponentType<EquationBlockProps>;
