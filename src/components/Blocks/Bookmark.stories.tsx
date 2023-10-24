import { Bookmark } from "./Bookmark.js";
import BookmarkObject from "./Bookmark.json";
import BookmarkNoOgMetaObject from "./Bookmark.NoOgMeta.json";

import type { Meta, StoryObj } from "@storybook/react";
import type { BookmarkBlockObject } from "@udus/notion-libs";

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
