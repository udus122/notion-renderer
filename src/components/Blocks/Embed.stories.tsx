import Embed from "./Embed";
import EmbedObject from "./Embed.json";
import EmbedTwitterObject from "./Embed.Twitter.json";

import type { EmbedBlockObjectComponent } from "@/types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Embed> = {
  title: "Blocks/Embed",
  component: Embed,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Embed>;

export const Default: Story = {
  args: {
    block: EmbedObject as EmbedBlockObjectComponent,
  },
};

export const Twitter: Story = {
  args: {
    block: EmbedTwitterObject as EmbedBlockObjectComponent,
  },
};
