import DateRollupPropertyObject from "./Rollup.Date.json";
import { RollupProperty } from "./Rollup";
import NumberRollupPropertyObject from "./Rollup.Number.json";

import type { RollupPropertyItemObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RollupProperty> = {
  title: "Properties/Rollup",
  component: RollupProperty,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof RollupProperty>;

export const Default: Story = {
  args: {
    propertyItem:
      NumberRollupPropertyObject as unknown as RollupPropertyItemObject,
  },
};

// biome-ignore lint/suspicious/noShadowRestrictedNames: StorybookのUIに表示したいため
export const Date: Story = {
  args: {
    propertyItem:
      DateRollupPropertyObject as unknown as RollupPropertyItemObject,
  },
};
