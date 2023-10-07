import Video from "./Video";
import VideoExternalObject from "./Video.External.json";
import VideoFileObject from "./Video.File.json";
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
    block: VideoExternalObject as VideoBlockObjectComponent,
  },
};

export const External: Story = {
  args: {
    block: VideoExternalObject as VideoBlockObjectComponent,
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
