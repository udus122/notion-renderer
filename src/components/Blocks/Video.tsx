import { RichText } from "../RichText/RichText.js";

import type { VideoBlock } from "../../types/notion/block/video.js";

export const Video: VideoBlock = ({ block }) => {
  const videoUrl =
    block.video.type == "external"
      ? block.video.external.url
      : block.video.type == "file"
        ? block.video.file.url
        : "";

  return (
    <div id={block.id} className="notion-block notion-video">
      {block.video.type == "external" && block.video.oembed ? (
        <div
          dangerouslySetInnerHTML={{
            __html:
              block.video.oembed.type === "video"
                ? block.video.oembed.html
                : "",
          }}
        />
      ) : (
        <>
          <video controls src={videoUrl}>
            Your browser does not support type os. You can download video file{" "}
            <a href={videoUrl}>here</a>.
          </video>
          <div className="notion-caption notion-video-caption">
            <RichText richText={block.video.caption} />
          </div>
        </>
      )}
    </div>
  );
};
