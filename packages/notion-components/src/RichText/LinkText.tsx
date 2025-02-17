import type { TextRichTextItemObject } from "@udus/notion-types";

type Props = {
  richTextText: TextRichTextItemObject["text"];
};

export const LinkText: React.FC<Props> = ({ richTextText }) => {
  return (
    <a className="notion-link" href={richTextText.link?.url}>
      {richTextText.content}
    </a>
  );
};
