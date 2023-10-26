import { AnnotationItem } from "./AnnotationItem.js";
import RichTextAnnotationObject from "./AnnotationItem.json";

import type { RichTextItem } from "../../../types/notion/richText/richTextItem.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof AnnotationItem> = {
  title: "Annotation",
  component: AnnotationItem,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof AnnotationItem>;

export const Default: Story = {
  args: {
    richTextItem: RichTextAnnotationObject as RichTextItem,
    children: "text with all annotation",
  },
};
