import { Annotations } from "./Annotation.js";
import RichTextAnnotationObject from "./Annotation.json";

import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Annotations> = {
  title: "RichTexts/Annotations",
  component: Annotations,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Annotations>;

export const Default: Story = {
  args: {
    richTextItem: RichTextAnnotationObject as RichTextItemResponse,
    children: "text with all annotation",
  },
};

export const withCustomMapper: Story = {
  args: {
    richTextItem: RichTextAnnotationObject as RichTextItemResponse,
    children: "text with all annotation with custom Bold(reset all style)",
    annotationMapper: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      bold: ({ children }) => (
        <span style={{ all: "initial" }}>{children}</span>
      ),
    },
  },
};
