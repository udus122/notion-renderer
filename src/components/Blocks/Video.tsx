import { RichTexts } from "../RichTexts/index.js";

import type {
  BlockComponentProps,
  VideoBlockObjectComponent,
} from "../../types/components.js";

type Props = BlockComponentProps<VideoBlockObjectComponent>;

export const Video: React.FC<Props> = ({ block }) => {
  const videoUrl =
    block.video.type == "external"
      ? block.video.external.url
      : block.video.type == "file"
      ? block.video.file.url
      : "";

  if (block.video.oembed) {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html:
            block.video.oembed.type === "video" ? block.video.oembed.html : "",
        }}
      />
    );
  }

  return (
    <div id={block.id} className="notion_video">
      <video controls src={videoUrl}>
        Your browser does not support type os. You can download video file
        <a href={videoUrl}>here</a>.
      </video>
      <div className="notion_caption notion_video_caption">
        <RichTexts richTexts={block.video.caption} />
      </div>
    </div>
  );
};
