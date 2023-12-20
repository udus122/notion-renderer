import type { BlockBlockProps } from "./block.js";
import type { Overwrite } from "../../utils.js";
import type { TextRequest } from "../common/common.js";
import type { RichTextItemType } from "../richText/richTextItem.js";
import type { AudioBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type AudioBlockObject = Overwrite<
  AudioBlockObjectResponse,
  {
    audio:
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

export type AudioBlockProps = BlockBlockProps<AudioBlockObject>;

export type AudioBlock = ComponentType<AudioBlockProps>;
