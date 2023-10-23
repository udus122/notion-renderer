import { RichText } from "../RichText/RichText.js";

import type { BlockProps, VideoBlockObject } from "@udus/notion-libs";

type Props = BlockProps<VideoBlockObject>;

export const Video: React.FC<Props> = ({ block }) => {
  if (block.video.type === "external" && block.video.oembed) {
    return (
      <div
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
    <div id={block.id} className="notion_video">
      <video controls src={videoUrl}>
        Your browser does not support type os. You can download video file
        <a href={videoUrl}>here</a>.
      </video>
      <div className="notion_caption notion_video_caption">
        <RichText richText={block.video.caption} />
      </div>
    </div>
  );
};
