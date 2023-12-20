"use client";
import { Page } from "@udus/notion-renderer/components";

import type { PageObject } from "@udus/notion-renderer/types";

export default function NotionPage({ page }: { page: PageObject }) {
  return page && <Page page={page} theme="dark" />;
}
