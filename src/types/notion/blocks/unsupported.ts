import type { BlockBlockProps } from "./block.js";
import type { UnsupportedBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type UnsupportedBlockObject = UnsupportedBlockObjectResponse;

export type UnsupportedBlockProps = BlockBlockProps<UnsupportedBlockObject>;

export type UnsupportedBlock = ComponentType<UnsupportedBlockProps>;
