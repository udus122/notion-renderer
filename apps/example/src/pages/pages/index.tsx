import { Database, Page } from "@udus/notion-renderer/components";
import {
  fetchDatabase,
  queryAllDatabaseItems,
  fetchPage,
} from "@udus/notion-renderer/libs";
import Head from "next/head";

import type { InferGetStaticPropsType, NextPage } from "next";

export const getStaticProps = async () => {
  const page_id = "4553dcd168664730aa8723e1cace3d7e"; // UDlog
  const pageResult = await fetchPage({ page_id });
  const page = pageResult.ok ? pageResult.data : null;
  const database_id = "0c610de6533f47c2a6b3aa38d306ee79"; // 記事一覧
  const databaseResult = await fetchDatabase({ database_id });
  const database = databaseResult.ok ? databaseResult.data : null;
  const pages = await queryAllDatabaseItems({
    database_id,
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
  });

  return {
    props: {
      page,
      database,
      pages,
    },
    revalidate: 60 * 60, // 1時間
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Index: NextPage<Props> = ({ page, database, pages }) => {
  return (
    <>
      <Head>
        <title>UDlog</title>
      </Head>
      <header>
        {page && <Page page={page} theme="dark" />}
      </header>
      <main>
        {database && pages && (
          <Database
            database={database}
            pages={pages}
            hideCover
            hideIcon
            hideTitle
            hideDescription
            viewType="gallery"
            theme="dark"
            displayProperties={["title", "Published"]}
          />
        )}
      </main>
      <footer
        className="notion-dark"
        style={{
          blockSize: "1rem",
          backgroundColor: "var(--color-bg-default)",
        }}
      ></footer>
    </>
  );
};

export default Index;
