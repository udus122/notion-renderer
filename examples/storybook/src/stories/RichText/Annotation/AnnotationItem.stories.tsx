import { AnnotationItem } from "@udus/notion-components";
import RichTextAnnotationObject from "./AnnotationItem.json";

import type { RichTextItemType } from "@udus/notion-types";
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
    richTextItem: RichTextAnnotationObject as RichTextItemType,
    children: "text with all annotation",
  },
};
