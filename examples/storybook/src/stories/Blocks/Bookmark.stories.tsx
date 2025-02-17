import { Bookmark } from "./Bookmark";
import BookmarkObject from "./Bookmark.json";
import BookmarkNoOgMetaObject from "./Bookmark.NoOgMeta.json";

import type { BookmarkBlockObject } from "@udus/notion-types";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Bookmark> = {
  title: "Blocks/Bookmark",
  component: Bookmark,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Bookmark>;

export const Default: Story = {
  args: {
    block: BookmarkObject as BookmarkBlockObject,
  },
};

export const NoOgMeta: Story = {
  args: {
    block: BookmarkNoOgMetaObject as BookmarkBlockObject,
  },
};
