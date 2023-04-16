import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

import RichTextAnnotationObject from "./index.json";

import { RichTextAnnotation } from "./index";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RichTextAnnotation> = {
  title: "RichText/Annotation/RichTextAnnotation",
  component: RichTextAnnotation,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RichTextAnnotation>;

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
    customAnnotationMapper: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      bold: ({ children }) => (
        <span style={{ all: "initial" }}>{children}</span>
      ),
    },
  },
};
