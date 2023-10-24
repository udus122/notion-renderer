import { RichText } from "../RichText/RichText.js";

import type { BlockProps } from "./Block.js";
import type { EmbedBlockObject } from "@udus/notion-libs";

type Props = BlockProps<EmbedBlockObject>;

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
        <RichText richText={block.embed.caption} />
      </div>
    </div>
  );
};
