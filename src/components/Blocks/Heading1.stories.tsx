import Heading1 from "./Heading1";
import Heading1Object from "./Heading1.json";

import type { Heading1BlockObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Heading1> = {
  title: "Blocks/Heading1",
  component: Heading1,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Heading1>;

export const Default: Story = {
  args: {
    block: Heading1Object as Heading1BlockObjectResponse,
  },
};
