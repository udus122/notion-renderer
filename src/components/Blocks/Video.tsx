import YouTube from "react-youtube";

import RichTexts from "../RichTexts/RichTexts";

import type {
  BlockComponentProps,
  VideoBlockObjectComponent,
} from "@/types/components";

type Props = BlockComponentProps<VideoBlockObjectComponent>;

const Video: React.FC<Props> = ({ block }) => {
  const videoUrl =
    block.video.type == "external"
      ? block.video.external.url
      : block.video.type == "file"
      ? block.video.file.url
      : "";

  const youTubeId = getYouTubeId(videoUrl);

  if (youTubeId) {
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

export default Video;

const getYouTubeId = (url: string) => {
  const arr = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if (arr[0] === url) {
    // if cannot find YouTubeId, return undefined.
    return undefined;
  }
  return undefined !== arr[2] ? arr[2].split(/[^\w-]/i)[0] : arr[0];
};
