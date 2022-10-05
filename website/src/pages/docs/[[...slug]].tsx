/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetStaticPaths } from 'next';
import Head from 'next/head';
import React from 'react';
import Layout, { LayoutContent } from '../../components/Layout';
import DocsData from '../../content/docs/data.json';
import getDocBySlug from '../../helpers/getDocBySlug';

export default function Docs({ url, doc }: any) {
  console.log(DocsData);

  console.log(doc);

  return (
    <>
      <Head>
        <title>RXN Input - Documentation</title>
      </Head>

      <Layout SelectedPage={'DOCS'}>
        <LayoutContent style={{ marginTop: `8rem` }}>
          <h1>{url}</h1>
        </LayoutContent>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ params }: any) => {
  return {
    props: {
      url: params?.slug ? Array.from(params.slug).join('/') : '/',
      doc: getDocBySlug(params?.slug),
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: Array<string> | undefined }> = async () => {
  const paths: Array<{ params: { slug: Array<string> | undefined } }> = [];

  Object.keys(DocsData).forEach((version) => {
    Object.keys((DocsData as any)[version]).forEach((folder) => {
      Object.keys((DocsData as any)[version][folder]).forEach((docName) => {
        (DocsData as any)[version][folder][docName].slugs.map((slug: string) => {
          paths.push({ params: { slug: slug.split('/').slice(1)[0] == '' ? undefined : slug.split('/').slice(1) } });
        });
      });
    });
  });

  return {
    paths: paths,
    fallback: false,
  };
};
