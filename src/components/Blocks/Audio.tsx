import { RichTexts } from "../RichTexts/index.js";

import type { AudioBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockProps } from "src/types/utils.js";

export type AudioBlockObject = AudioBlockObjectResponse;

type Props = BlockProps<AudioBlockObject>;

export const Audio: React.FC<Props> = ({
  block,
  richTextItemMapper,
  annotationMapper,
  LinkComponent,
}) => {
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
        <RichTexts
          richTextItems={block.audio.caption}
          richTextItemMapper={richTextItemMapper}
          annotationMapper={annotationMapper}
          LinkComponent={LinkComponent}
        />
      </div>
    </div>
  );
};
