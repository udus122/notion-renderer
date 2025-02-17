import type { BlockBlockProps } from "./block";
import type { Overwrite } from "../../utils";
import type { TextRequest } from "../common/common";
import type { RichTextItemType } from "../richText/richTextItem";
import type {
  LinkTypeData,
  PhotoTypeData,
  VideoTypeData,
  RichTypeData,
} from "@extractus/oembed-extractor";
import type { VideoBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
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
          caption: Array<RichTextItemType>;
          oembed?: LinkTypeData | PhotoTypeData | VideoTypeData | RichTypeData;
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

export type VideoBlockProps = BlockBlockProps<VideoBlockObject>;

export type VideoBlock = ComponentType<VideoBlockProps>;
