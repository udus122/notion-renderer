import type { Overwrite } from "../../utils.js";
import type { TextRequest } from "../common.js";
import type { BlockBlockProps } from "./block.js";
import type { RichTextItem } from "../richText/richTextItem.js";
import type {
  LinkTypeData,
  PhotoTypeData,
  VideoTypeData,
  RichTypeData,
} from "@extractus/oembed-extractor";
import type { VideoBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type VideoBlockObject = Overwrite<
  VideoBlockObjectResponse,
  {
    video:
      | {
          type: "external";
          external: {
            url: TextRequest;
          };
          caption: Array<RichTextItem>;
          oembed?: LinkTypeData | PhotoTypeData | VideoTypeData | RichTypeData;
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

export type VideoBlockProps = BlockBlockProps<VideoBlockObject>;

export type VideoBlock = ComponentType<VideoBlockProps>;
