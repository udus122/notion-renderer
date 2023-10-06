import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";

import Annotations from "./Annotations";
import RichTextAnnotationObject from "./Annotations.json";

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
    customAnnotationMapper: {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      bold: ({ children }) => (
        <span style={{ all: "initial" }}>{children}</span>
      ),
    },
  },
};
