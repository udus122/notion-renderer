import { Annotation } from "./Annotation.js";
import RichTextAnnotationObject from "./Annotation.json";

import type { Meta, StoryObj } from "@storybook/react";
import type { RichTextItem } from "@udus/notion-libs";

const meta: Meta<typeof Annotation> = {
  title: "Annotation",
  component: Annotation,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Annotation>;

export const Default: Story = {
  args: {
    richTextItem: RichTextAnnotationObject as RichTextItem,
    children: "text with all annotation",
  },
};
