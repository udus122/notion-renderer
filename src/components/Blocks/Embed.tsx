import { RichTexts } from "../RichTexts/index.js";

import type { EmbedBlockObject } from "../../types/components.js";
import type { BlockComponentProps } from "src/types/utils.js";

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
