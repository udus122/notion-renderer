import RichTexts from "../RichTexts/RichTexts";

import type { BlockComponentProps, EmbedBlockObjectComponent } from "@/types";

type Props = BlockComponentProps<EmbedBlockObjectComponent>;

const Embed: React.FC<Props> = ({ block }) => {
  return (
    <div id={block.id} className="notion_embed">
      <iframe src={block.embed.url} />
      <div className="notion_embed_caption">
        <RichTexts richTexts={block.embed.caption} />
      </div>
    </div>
  );
};

export default Embed;
