/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Layout, { LayoutContent } from '../../components/Layout';
import DocsData from '../../content/docs/data.json';

export default function Docs({ post }: any) {
  console.log(DocsData);

  return (
    <>
      <Head>
        <title>RXN Input - Documentation</title>
      </Head>

      <Layout SelectedPage={'DOCS'}>
        <LayoutContent style={{ marginTop: `8rem` }}>
          <h1>{post}</h1>
        </LayoutContent>
      </Layout>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return {
    props: {
      post: params?.slug + '####',
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: Array<string> | undefined }> = async () => {
  const paths: Array<{ params: { slug: Array<string> | undefined } }> = [];

  const isNextVersion = (version: string) => version == Object.keys(DocsData).slice(-1)[0];

  // create index `docs/`
  paths.push({
    params: {
      slug: undefined,
    },
  });

  Object.keys(DocsData).forEach((version) => {
    Object.keys((DocsData as any)[version]).forEach((folder) => {
      const transformedFolder = folder.replace(/ /g, '-').toLowerCase();

      // create index `docs/version/folder`
      paths.push({ params: { slug: [version, transformedFolder] } });

      //create index 'docs/folder' if is next version
      if (isNextVersion(version)) paths.push({ params: { slug: [transformedFolder] } });

      Object.keys((DocsData as any)[version][folder]).forEach((docName) => {
        const transformedDocName = docName.replace(/ /g, '-').toLowerCase();

        // create index `docs/version/folder/document`
        paths.push({ params: { slug: [version, transformedFolder, transformedDocName] } });

        //create index 'docs/folder/document' if is next version
        if (isNextVersion(version)) paths.push({ params: { slug: [transformedFolder, transformedDocName] } });
      });
    });
  });

  // log created pages
  (() => {
    console.log(``);
    paths.map((a) => {
      if (a.params.slug == undefined) {
        return console.log(`docs/`);
      }
      console.log(`docs/` + a.params.slug.join(`/`));
    });
    console.log(``);
  })();

  return {
    paths: paths,
    fallback: false,
  };
};
