import type { RichTextType } from "@udus/notion-types";

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
