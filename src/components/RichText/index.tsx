import { Annotation } from "./Annotation";
import { InlineEquation } from "./InlineEquation";
import { Mention } from "./Mention";
import { Text } from "./Text";

import type {
  EquationRichTextItemResponse,
  MentionRichTextItemResponse,
  RichTextItemResponse,
  TextRichTextItemResponse,
} from "@notionhq/client/build/src/api-endpoints";

export const RichText = ({
  richText,
}: {
  richText: RichTextItemResponse[] | undefined;
}) => {
  if (!richText) return null;
  const richTextComponentMapper = {
    text: ({ richTextItem }: { richTextItem: RichTextItemResponse }) => (
      <Text richTextItem={richTextItem as TextRichTextItemResponse} />
    ),
    equation: ({ richTextItem }: { richTextItem: RichTextItemResponse }) => (
      <InlineEquation
        richTextItem={richTextItem as EquationRichTextItemResponse}
      />
    ),
    mention: ({ richTextItem }: { richTextItem: RichTextItemResponse }) => (
      <Mention richTextItem={richTextItem as MentionRichTextItemResponse} />
    ),
  };
  return (
    <>
      {richText.map((richTextItem, index) => {
        if (!richTextItem) return null;
        const RichTextComponent = richTextComponentMapper[richTextItem.type];
        return (
          <Annotation
            richTextItem={richTextItem}
            key={`${index}_${richTextItem.plain_text}`}
          >
            <RichTextComponent richTextItem={richTextItem} />
          </Annotation>
        );
      })}
    </>
  );
};
