import RichTextsObject from "./index.json";

import { RichTexts } from "./index.js";

import type { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RichTexts> = {
  title: "RichTexts/RichTexts",
  component: RichTexts,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RichTexts>;

export const Default: Story = {
  args: {
    richTexts: RichTextsObject as RichTextItemResponse[],
  },
};
