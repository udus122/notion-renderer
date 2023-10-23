import PdfExternalObject from "./Pdf.External.json";
import PdfFileObject from "./Pdf.File.json";
import { Pdf } from "./Pdf.js";

import type { Meta, StoryObj } from "@storybook/react";
import type { PdfBlockObject } from "@udus/notion-libs";

const meta: Meta<typeof Pdf> = {
  title: "Blocks/Pdf",
  component: Pdf,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Pdf>;

export const Default: Story = {
  args: {
    block: PdfExternalObject as PdfBlockObject,
  },
};

export const External: Story = {
  args: {
    block: PdfExternalObject as PdfBlockObject,
  },
};

export const File: Story = {
  args: {
    block: PdfFileObject as PdfBlockObject,
  },
};
