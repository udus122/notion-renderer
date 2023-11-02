import type { BlockBlockProps } from "./block.js";
import type { Overwrite } from "../../../types/utils.js";
import type { TextRequest } from "../common/common.js";
import type { RichTextItem } from "../richText/richTextItem.js";
import type { FileBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type FileBlockObject = Overwrite<
  FileBlockObjectResponse,
  {
    file:
      | {
          type: "external";
          external: {
            url: TextRequest;
          };
          caption: Array<RichTextItem>;
        }
      | {
          type: "file";
          file: {
            url: string;
            expiry_time: string;
          };
          caption: Array<RichTextItem>;
        };
  }
>;

export type FileBlockProps = BlockBlockProps<FileBlockObject>;

export type FileBlock = ComponentType<FileBlockProps>;
