import type { BlockBlockProps } from "./block";
import type { RichTextItemType } from "../richText/richTextItem";
import type {
  LinkTypeData,
  PhotoTypeData,
  VideoTypeData,
  RichTypeData,
} from "@extractus/oembed-extractor";
import type { EmbedBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { ComponentType } from "react";

export type EmbedBlockObject = EmbedBlockObjectResponse & {
  embed: {
    caption: Array<RichTextItemType>;
    oembed?: LinkTypeData | PhotoTypeData | VideoTypeData | RichTypeData;
  };
};

export type EmbedBlockProps = BlockBlockProps<EmbedBlockObject>;

export type EmbedBlock = ComponentType<EmbedBlockProps>;
