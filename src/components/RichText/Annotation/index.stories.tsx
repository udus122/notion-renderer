import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

import RichTextAnnotationObject from "./index.json";

import { Annotation } from "./index";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Annotation> = {
  title: "RichText/Annotation",
  component: Annotation,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Annotation>;

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
