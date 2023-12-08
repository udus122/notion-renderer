import { Title } from "./Title.js";
import TitleObject from "./Title.json";

import type { Meta, StoryObj } from "@storybook/react";
import type { RichText } from "src/types/notion/richText/richText.js";

const meta: Meta<typeof Title> = {
  title: "Common/Title",
  component: Title,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    title: TitleObject as RichText,
  },
};
