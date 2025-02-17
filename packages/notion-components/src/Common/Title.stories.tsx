import { Title } from "./Title";
import TitleObject from "./Title.json";

import type { RichTextType } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Title> = {
  title: "Common/Title",
  component: Title,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Title>;

export const Default: Story = {
  args: {
    title: TitleObject as RichTextType,
  },
};
