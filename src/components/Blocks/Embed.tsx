import { RichTexts } from "../RichTexts/index.js";

import type {
  LinkTypeData,
  PhotoTypeData,
  VideoTypeData,
  RichTypeData,
} from "@extractus/oembed-extractor";
import type { EmbedBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockComponentProps } from "src/types/utils.js";

export type EmbedBlockObject = EmbedBlockObjectResponse & {
  embed: {
    oembed?: LinkTypeData | PhotoTypeData | VideoTypeData | RichTypeData;
  };
};

type Props = BlockComponentProps<EmbedBlockObject>;

export const Embed: React.FC<Props> = ({ block }) => {
  if (block.embed.oembed) {
    return (
      <div>
        <div
          dangerouslySetInnerHTML={{
            __html:
              block.embed.oembed.type === "rich" ? block.embed.oembed.html : "",
          }}
        />
      </div>
    );
  }

  return (
    <div id={block.id} className="notion_embed">
      <iframe src={block.embed.url} title="notion embed content" />
      <div className="notion_caption notion_embed_caption">
        <RichTexts richTexts={block.embed.caption} />
      </div>
    </div>
  );
};
