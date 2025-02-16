import type { BlockBlockProps } from "./block.js";
import type { EquationBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type EquationBlockObject = EquationBlockObjectResponse & {
  equation: {
    expression: string;
  };
};

export type EquationBlockProps = BlockBlockProps<EquationBlockObject>;

export type EquationBlock = ComponentType<EquationBlockProps>;
