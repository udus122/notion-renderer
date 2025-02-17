import { Link } from "./Link";
import TextObject from "./Link.json";

import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Link> = {
  title: "Link/Link",
  component: Link,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    prefix: "/",
    link: TextObject.text.link.url,
    children: "this is a link.",
  },
};
