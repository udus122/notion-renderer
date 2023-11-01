import BooleanFormulaPropertyObject from "./Formula.Boolean.json";
import DateFormulaPropertyObject from "./Formula.Date.json";
import { FormulaProperty } from "./Formula.js";
import NumberFormulaPropertyObject from "./Formula.Number.json";
import StringFormulaPropertyObject from "./Formula.String.json";

import type { FormulaPropertyItemObject } from "../../types/notion/propertyItem/formula.js";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof FormulaProperty> = {
  title: "Property/Formula",
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

export const Boolean: Story = {
  args: {
    propertyItem:
      BooleanFormulaPropertyObject as unknown as FormulaPropertyItemObject,
  },
};

export const Date: Story = {
  args: {
    propertyItem:
      DateFormulaPropertyObject as unknown as FormulaPropertyItemObject,
  },
};

export const Number: Story = {
  args: {
    propertyItem:
      NumberFormulaPropertyObject as unknown as FormulaPropertyItemObject,
  },
};
