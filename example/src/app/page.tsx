import { fetchPage } from "@udus/notion-renderer/libs";

import { Page } from "../components/notion-renderer";

async function getPage({ page_id }: { page_id: string }) {
  const { ok, data } = await fetchPage({ page_id });

  if (ok) {
    return data;
  }
}

export default async function Home() {
  const page = await getPage({ page_id: "4553dcd168664730aa8723e1cace3d7e" });
  return (
    <>
      <header>{page && <Page page={page} />}</header>
      <main>
        <h1>UDlog</h1>
        <p>UDlogは、UDusが運営するブログです。</p>
      </main>
    </>
  );
}
