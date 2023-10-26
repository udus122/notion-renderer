import type { RichTextProps } from "../common.js";
import type { EquationRichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";

export type EquationRichTextItem = EquationRichTextItemResponse & {
  id?: string;
};

type Props = Omit<RichTextProps<EquationRichTextItem>, "richTextItemMapper">;
