import RichTexts from "../RichTexts/RichTexts";

import type { BlockComponentProps, AudioBlockObjectComponent } from "@/types";

type Props = BlockComponentProps<AudioBlockObjectComponent>;

const Audio: React.FC<Props> = ({ block }) => {
  return (
    <div id={block.id} className="notion_audio">
      <audio
        controls
        src={
          block.audio.type == "external"
            ? block.audio.external.url
            : block.audio.type == "file"
            ? block.audio.file.url
            : ""
        }
      >
        Your browser does not support HTML5 audios.
      </audio>
      <div className="notion_audio_caption">
        <RichTexts richTexts={block.audio.caption} />
      </div>
    </div>
  );
};

export default Audio;
