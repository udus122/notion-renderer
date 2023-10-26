import { Quote } from "./Quote.js";
import QuoteObject from "./Quote.json";

import type { QuoteBlockObject } from "../../types/notion/blocks/quote.js";
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
    block: QuoteObject as QuoteBlockObject,
  },
};
