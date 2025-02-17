import type { BlockBlockProps } from "./block";
import type { Overwrite } from "../../utils";
import type { TextRequest } from "../common/common";
import type { RichTextItemType } from "../richText/richTextItem";
import type { FileBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
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
          caption: Array<RichTextItemType>;
        }
      | {
          type: "file";
          file: {
            url: string;
            expiry_time: string;
          };
          caption: Array<RichTextItemType>;
        };
  }
>;

export type FileBlockProps = BlockBlockProps<FileBlockObject>;

export type FileBlock = ComponentType<FileBlockProps>;
