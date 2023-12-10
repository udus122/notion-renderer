import { RichText } from "../RichText/RichText.js";

import type { VideoBlock } from "../../types/notion/blocks/video.js";

export const Video: VideoBlock = ({ block }) => {
  if (block.video.type === "external" && block.video.oembed) {
    return (
      <div
        className="notion-video"
        dangerouslySetInnerHTML={{
          __html:
            block.video.oembed.type === "video" ? block.video.oembed.html : "",
        }}
      />
    );
  }

  const videoUrl =
    block.video.type == "external"
      ? block.video.external.url
      : block.video.type == "file"
        ? block.video.file.url
        : "";

  return (
    <div id={block.id} className="notion-block notion-video">
      <video controls src={videoUrl}>
        Your browser does not support type os. You can download video file
        <a href={videoUrl}>here</a>.
      </video>
      <div className="notion-caption notion-video-caption">
        <RichText richText={block.video.caption} />
      </div>
    </div>
  );
};
