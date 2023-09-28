import { Fragment } from "react";

import { Annotation } from "../Annotation";

import { Link } from "./Link";

import type { TextRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

const defaultAnnotationMapper = {
  link: Link,
};

type Props = {
  richTextItem: TextRichTextItemResponse;
  customMapper?: object;
};
/**
 * text.contentの内容を受け取って、改行とリンクを含めてspan要素で囲んで返すコンポーネント
 */
export const Text: React.FC<Props> = ({ richTextItem, customMapper }) => {
  const annotationMapper = {
    ...defaultAnnotationMapper,
    ...customMapper,
  };
  let text = breakTextRichTextItem(richTextItem);
  if (richTextItem.text.link) {
    const LinkAnnotation = annotationMapper["link"];
    text = <LinkAnnotation richTextItem={richTextItem}>{text}</LinkAnnotation>;
  }
  return (
    <span className="notion_rich_text_type_text">
      <Annotation richTextItem={richTextItem}>{text}</Annotation>
    </span>
  );
};

function breakTextRichTextItem(richTextItem: TextRichTextItemResponse) {
  const text_content = richTextItem.text.content
    .split(/\n|\\n/)
    .reduce((acc: React.ReactNode | string, content: string, i: number) => {
      if (i === 0) {
        return content;
      }
      return (
        <Fragment key={`${content}-${i}`}>
          {acc}
          <br />
          {content}
        </Fragment>
      );
    }, "");
  return text_content;
}
