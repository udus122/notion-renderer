import { RichText } from "../RichText/RichText";

import type { AudioBlock } from "@udus/notion-types";

export const Audio: AudioBlock = ({ block }) => {
  const audioUrl =
    block.audio.type === "external"
      ? block.audio.external.url
      : block.audio.type === "file"
        ? block.audio.file.url
        : "";
  return (
    <div id={block.id} className="notion-block notion-audio">
      <audio controls src={audioUrl}>
        <track kind="captions" />
        Your browser does not support HTML5 audios. You can download audio file
        <a href={audioUrl}>here</a>.
      </audio>
      <div className="notion-caption notion-audio-caption">
        <RichText richText={block.audio.caption} />
      </div>
    </div>
  );
};
