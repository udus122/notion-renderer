import YouTube from "react-youtube";

import { RichTexts } from "../RichTexts/RichTexts.js";

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

  const youTubeId = getYouTubeId(videoUrl);

  if (youTubeId) {
    // @ts-expect-error: Error caused by being treated as a commonjs library because the library's package.json does not have "type": "module"
    return <YouTube videoId={youTubeId} />;
  }

  return (
    <div id={block.id} className="notion_video">
      <video controls src={videoUrl}>
        Your browser does not support HTML5 videos. You can download video file
        <a href={videoUrl}>here</a>.
      </video>
      <div className="notion_caption notion_video_caption">
        <RichTexts richTexts={block.video.caption} />
      </div>
    </div>
  );
};

const getYouTubeId = (url: string) => {
  const arr = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if (arr[0] === url) {
    // if cannot find YouTubeId, return undefined.
    return undefined;
  }
  return undefined !== arr[2] ? arr[2].split(/[^\w-]/i)[0] : arr[0];
};
