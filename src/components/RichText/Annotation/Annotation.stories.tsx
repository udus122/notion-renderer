import { Annotation } from "./Annotation.js";
import RichTextAnnotationObject from "./Annotation.json";

import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Annotation> = {
  title: "Annotation",
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
