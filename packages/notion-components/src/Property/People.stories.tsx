import { PeopleProperty } from "./People";
import PeoplePropertyObject from "./People.json";

import type { PeoplePropertyItemObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof PeopleProperty> = {
  title: "Properties/People",
  component: PeopleProperty,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof PeopleProperty>;

export const Default: Story = {
  args: {
    propertyItem: PeoplePropertyObject as unknown as PeoplePropertyItemObject,
  },
  decorators: [
    (Story) => (
      <div className="notion-root notion-light">
        <Story />
      </div>
    ),
  ],
};
