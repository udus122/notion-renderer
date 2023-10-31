import { useEffect } from "react";

import { RichText } from "../RichText/RichText.js";

import type { EmbedBlock } from "../../types/notion/blocks/embed.js";

export const Embed: EmbedBlock = ({ block }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  if (block.embed.oembed) {
    return (
      <div
        className="notion-block notion-embed"
        dangerouslySetInnerHTML={{
          __html:
            block.embed.oembed.type === "rich" ? block.embed.oembed.html : "",
        }}
      />
    );
  }

  return (
    <div id={block.id} className="notion-block notion-embed">
      <iframe src={block.embed.url} title="notion embed content" />
      <div className="notion-caption notion-embed-caption">
        <RichText richText={block.embed.caption} />
      </div>
    </div>
  );
};
