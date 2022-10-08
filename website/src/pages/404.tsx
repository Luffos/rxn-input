/* eslint-disable @next/next/no-document-import-in-page */
import { NextPage } from 'next';
import Head from 'next/head';
import Layout, { LayoutContent } from '../components/Layout';

const Page404: NextPage = () => {
  return (
    <>
      <Head>
        <title>Page Not Found | RXN Input</title>
      </Head>

      <Layout>
        <LayoutContent style={{ marginTop: `9rem` }}>
          <h1 style={{ fontSize: `3rem` }}>Page Not Found</h1>
        </LayoutContent>
      </Layout>
    </>
  );
};

export default Page404;
