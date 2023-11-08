import type { BlockBlockProps } from "./block.js";
import type { RichTextItem } from "../richText/richTextItem.js";
import type {
  LinkTypeData,
  PhotoTypeData,
  VideoTypeData,
  RichTypeData,
} from "@extractus/oembed-extractor";
import type { EmbedBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { ComponentType } from "react";

export type EmbedBlockObject = EmbedBlockObjectResponse & {
  embed: {
    caption: Array<RichTextItem>;
    oembed?: LinkTypeData | PhotoTypeData | VideoTypeData | RichTypeData;
  };
};

export type EmbedBlockProps = BlockBlockProps<EmbedBlockObject>;

export type EmbedBlock = ComponentType<EmbedBlockProps>;
