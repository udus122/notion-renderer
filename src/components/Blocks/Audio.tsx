import { RichTexts } from "../RichTexts/RichTexts.js";

import type {
  BlockComponentProps,
  AudioBlockObjectComponent,
} from "../../types/components.js";

type Props = BlockComponentProps<AudioBlockObjectComponent>;

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
        <RichTexts richTexts={block.audio.caption} />
      </div>
    </div>
  );
};
