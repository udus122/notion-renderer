import { RichText } from "../RichText/RichText.js";

import type { AudioBlockObject } from "src/libs/notion/blocks/audio.js";
import type { BlockProps } from "src/types/utils.js";

type Props = BlockProps<AudioBlockObject>;

export const Audio: React.FC<Props> = ({ block }) => {
  const audioUrl =
    block.audio.type == "external"
      ? block.audio.external.url
      : block.audio.type == "file"
      ? block.audio.file.url
      : "";
  return (
    <div id={block.id} className="notion_audio">
      <audio controls src={audioUrl}>
        Your browser does not support HTML5 audios. You can download audio file
        <a href={audioUrl}>here</a>.
      </audio>
      <div className="notion_caption notion_audio_caption">
        <RichText richTextItems={block.audio.caption} />
      </div>
    </div>
  );
};
