import { Page } from "@udus/notion-renderer/components";
import { fetchBlockList, fetchPage } from "@udus/notion-renderer/libs";

import { client } from "@/auth";

export default async function Home() {
  const pageResult = await fetchPage(client, {
    page_id: "7ed3a6eebb5e4cdfa94433684d7c56bf",
  });
  const page = pageResult.ok ? pageResult.data : undefined;
  const blocksResult = await fetchBlockList(client, {
    block_id: "7ed3a6eebb5e4cdfa94433684d7c56bf",
  });
  const blocks = blocksResult.ok ? blocksResult.data : undefined;

  return page && blocks && <Page page={page} blocks={blocks} />;
}
