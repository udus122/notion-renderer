import Video from "./Video";
import VideoFileObject from "./Video.File.json";
import VideoObject from "./Video.json";
import VideoYouTubeObject from "./Video.YouTube.json";

import type { VideoBlockObjectComponent } from "@/types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Video> = {
  title: "Blocks/Video",
  component: Video,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Video>;

export const Default: Story = {
  args: {
    block: VideoObject as VideoBlockObjectComponent,
  },
};

export const File: Story = {
  args: {
    block: VideoFileObject as VideoBlockObjectComponent,
  },
};

export const YouTube: Story = {
  args: {
    block: VideoYouTubeObject as VideoBlockObjectComponent,
  },
};
