import { Page } from "@udus/notion-renderer/components";
import {
  queryAllDatabaseItems,
  fetchPage,
  fetchBlockList,
} from "@udus/notion-renderer/libs";
import Head from "next/head";

import type {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesDatabaseId = "0c610de6533f47c2a6b3aa38d306ee79";
  const articles = await queryAllDatabaseItems({
    database_id: articlesDatabaseId,
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
  });

  const pages = [...articles];
  const paths = pages.map(({ id }) => ({
    params: {
      id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.id) {
    return {
      props: {},
    };
  }
  if (typeof params.id !== "string") {
    throw new TypeError("parms.id must be String.");
  }
  const page = JSON.parse(
    JSON.stringify(await fetchPage({ page_id: params.id }))
  );
  const blocks = JSON.parse(
    JSON.stringify(
      await fetchBlockList({
        block_id: params.id as string,
      })
    )
  );

  return {
    props: {
      page,
      blocks,
    },
    revalidate: 60 * 60, // 1時間
  };
};

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Index: NextPage<Props> = ({ page, blocks }) => {
  return (
    <>
      <Head>
        {/* TODO: extract title */}
        <title>UDlog</title>
      </Head>
      <header>
        <Page page={page} hideProperties theme="dark" />
      </header>
      <main>
        <Page blocks={blocks} theme="dark" />
      </main>
    </>
  );
};

export default Index;
