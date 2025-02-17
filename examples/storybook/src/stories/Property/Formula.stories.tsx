import BooleanFormulaPropertyObject from "./Formula.Boolean.json";
import DateFormulaPropertyObject from "./Formula.Date.json";
import { FormulaProperty } from "@udus/notion-components";
import NumberFormulaPropertyObject from "./Formula.Number.json";
import StringFormulaPropertyObject from "./Formula.String.json";

import type { FormulaPropertyItemObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FormulaProperty> = {
  title: "Properties/Formula",
  component: FormulaProperty,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FormulaProperty>;

export const Default: Story = {
  args: {
    propertyItem:
      StringFormulaPropertyObject as unknown as FormulaPropertyItemObject,
  },
};

// biome-ignore lint/suspicious/noShadowRestrictedNames: StorybookのUIに表示したいため
export const Boolean: Story = {
  args: {
    propertyItem:
      BooleanFormulaPropertyObject as unknown as FormulaPropertyItemObject,
  },
};

// biome-ignore lint/suspicious/noShadowRestrictedNames: StorybookのUIに表示したいため
export const Date: Story = {
  args: {
    propertyItem:
      DateFormulaPropertyObject as unknown as FormulaPropertyItemObject,
  },
};

// biome-ignore lint/suspicious/noShadowRestrictedNames: StorybookのUIに表示したいため
export const Number: Story = {
  args: {
    propertyItem:
      NumberFormulaPropertyObject as unknown as FormulaPropertyItemObject,
  },
};
