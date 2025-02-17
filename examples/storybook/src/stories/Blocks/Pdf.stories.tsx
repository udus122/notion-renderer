import PdfExternalObject from "./Pdf.External.json";
import PdfFileObject from "./Pdf.File.json";
import { Pdf } from "@udus/notion-components";

import type { PdfBlockObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Pdf> = {
  title: "Blocks/Pdf",
  component: Pdf,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Pdf>;

export const Default: Story = {
  args: {
    block: PdfExternalObject as unknown as PdfBlockObject,
  },
};

export const External: Story = {
  args: {
    block: PdfExternalObject as unknown as PdfBlockObject,
  },
};

export const File: Story = {
  args: {
    block: PdfFileObject as unknown as PdfBlockObject,
  },
};
