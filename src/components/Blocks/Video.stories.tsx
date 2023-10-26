import VideoExternalObject from "./Video.External.json";
import VideoFileObject from "./Video.File.json";
import { Video } from "./Video.js";
import VideoYouTubeObject from "./Video.YouTube.json";

import type { Meta, StoryObj } from "@storybook/react";
import type { VideoBlockObject } from "../../types/notion.js";

const meta: Meta<typeof Video> = {
  title: "Blocks/Video",
  component: Video,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Video>;

export const Default: Story = {
  args: {
    block: VideoExternalObject as VideoBlockObject,
  },
};

export const External: Story = {
  args: {
    block: VideoExternalObject as VideoBlockObject,
  },
};

export const File: Story = {
  args: {
    block: VideoFileObject as VideoBlockObject,
  },
};

export const YouTube: Story = {
  args: {
    block: VideoYouTubeObject as VideoBlockObject,
  },
};
