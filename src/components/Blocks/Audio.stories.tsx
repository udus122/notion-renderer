import AudioExternalObject from "./Audio.External.json";
import AudioFileObject from "./Audio.File.json";
import { Audio } from "./Audio.js";

import type { AudioBlockObject } from "../../types/notion/blocks/audio.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Audio> = {
  title: "Blocks/Audio",
  component: Audio,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Audio>;

export const Default: Story = {
  args: {
    block: AudioExternalObject as AudioBlockObject,
  },
};

export const External: Story = {
  args: {
    block: AudioExternalObject as AudioBlockObject,
  },
};

export const File: Story = {
  args: {
    block: AudioFileObject as AudioBlockObject,
  },
};
