import Quote from "./Quote";
import QuoteObject from "./Quote.json";

import type { QuoteBlockObjectComponent } from "@/types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Quote> = {
  title: "Blocks/Quote",
  component: Quote,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Quote>;

export const Default: Story = {
  args: {
    block: QuoteObject as QuoteBlockObjectComponent,
  },
};
