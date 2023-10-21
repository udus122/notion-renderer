import { RichText } from "../RichText/RichText.js";

import type {
  LinkTypeData,
  PhotoTypeData,
  VideoTypeData,
  RichTypeData,
} from "@extractus/oembed-extractor";
import type { VideoBlockObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { BlockProps } from "src/types/utils.js";

export type VideoBlockObject = VideoBlockObjectResponse & {
  video: {
    oembed?: LinkTypeData | PhotoTypeData | VideoTypeData | RichTypeData;
  };
};

type Props = BlockProps<VideoBlockObject>;

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
        <RichText richTextItems={block.video.caption} />
      </div>
    </div>
  );
};
