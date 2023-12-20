import { PageMeta } from "./PageMeta.js";
import PageMetaObject from "./PageMeta.json";

import type { PageObject as PageObjectType } from "../../types/notion/page.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PageMeta> = {
  title: "Page/PageMeta",
  component: PageMeta,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PageMeta>;

export const Default: Story = {
  args: {
    page: PageMetaObject as PageObjectType,
  },
  decorators: [
    (Story) => (
      <div className="notion-root notion-light">
        <Story />
      </div>
    ),
  ],
};

export const Dark: Story = {
  args: {
    page: PageMetaObject as PageObjectType,
    displayProperties: [
      "USxG",
      "Tags",
      "Text",
      "Multi-select",
      "Status",
      "Last edited time",
      "Related Child database",
      "Select",
      "Date",
      "Person",
      "Number",
      "Checkbox",
      "URL",
      "Email",
      "Phone",
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ blockSize: "100vh" }} className="notion-root notion-dark">
        <Story />
      </div>
    ),
  ],
};
