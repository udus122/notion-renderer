import { RichText } from "../index.js";

import type { RichText as RichTextType } from "../../types/notion/richText/richText.js";

type Props = {
  title: RichTextType;
};

export const Title: React.FC<Props> = function ({ title }) {
  return (
    <h1 className="notion-title">
      <RichText richText={title} />
    </h1>
  );
};
