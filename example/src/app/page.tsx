import { Database, Page } from "@udus/notion-renderer/components";
import {
  fetchDatabase,
  fetchDatabaseItems,
  fetchPage,
} from "@udus/notion-renderer/libs";

export default async function Home() {
  const pageResult = await fetchPage({
    page_id: "4553dcd168664730aa8723e1cace3d7e",
  });
  const page = pageResult.ok ? pageResult.data : undefined;
  const databaseResult = await fetchDatabase({
    database_id: "0c610de6533f47c2a6b3aa38d306ee79",
  });
  const database = databaseResult.ok ? databaseResult.data : undefined;
  const pagesResult = await fetchDatabaseItems({
    database_id: "0c610de6533f47c2a6b3aa38d306ee79",
    filter: {
      and: [
        {
          property: "Status",
          status: {
            equals: "公開",
          },
        },
      ],
    },
    sorts: [
      {
        property: "Published",
        direction: "descending",
      },
    ],
    page_size: 5,
  });
  const pages = pagesResult.ok ? pagesResult.data : [];

  return (
    <>
      {page && <Page page={page} />}
      {database && (
        <Database
          database={database}
          pages={pages}
          hideCover
          hideIcon
          hideTitle
          hideDescription
          viewType="gallery"
          displayProperties={["title", "Published", "Tags"]}
        />
      )}
    </>
  );
}
