import { AnnotationItem } from "./AnnotationItem.js";
import RichTextAnnotationObject from "./AnnotationItem.json";

import type { Meta, StoryObj } from "@storybook/react";
import type { RichTextItem } from "../../../types/notion.js";

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
