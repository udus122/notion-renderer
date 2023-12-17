import type { RichText as RichTextType } from "../../types/notion/richText/richText.js";

type Props = {
  title: RichTextType;
};

export const Title: React.FC<Props> = ({ title }) => {
  return (
    <h1 className="notion-title">
      {title.map((item) => item.plain_text).join("")}
    </h1>
  );
};
