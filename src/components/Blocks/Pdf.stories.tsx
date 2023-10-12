import { Pdf } from "./Pdf";
import PdfExternalObject from "./Pdf.External.json";
import PdfFileObject from "./Pdf.File.json";

import type { PdfBlockObjectComponent } from "@/types/components";
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
    block: PdfExternalObject as PdfBlockObjectComponent,
  },
};

export const External: Story = {
  args: {
    block: PdfExternalObject as PdfBlockObjectComponent,
  },
};

export const File: Story = {
  args: {
    block: PdfFileObject as PdfBlockObjectComponent,
  },
};
