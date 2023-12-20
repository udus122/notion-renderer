import type { BlockBlockProps } from "./block.js";
import type { Overwrite } from "../../utils.js";
import type { TextRequest } from "../common/common.js";
import type { RichTextItem } from "../richText/richTextItem.js";
import type { ImageBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type ImageBlockObject = Overwrite<
  ImageBlockObjectResponse,
  {
    image:
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

export type ImageBlockProps = BlockBlockProps<ImageBlockObject>;

export type ImageBlock = ComponentType<ImageBlockProps>;
