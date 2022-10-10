/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { GetStaticPaths } from 'next';
import Head from 'next/head';
import React from 'react';
import Layout, { LayoutContent } from '../../components/Layout';
import getDocBySlug from '../../helpers/getDocBySlug';
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import MdxComponents from '../../components/MdxComponents';
import DocsNavigator from '../../components/DocsNavigator';

import DocsData from '../../content/docs/data.json';
import useMediaQuery from '../../hooks/useMediaQuery';
import BreakPoints from '../../styles/theme/BreakPoints';

export default function Docs({ url, doc, source }: any) {
  const isMobile = useMediaQuery(BreakPoints.down('md'));

  return (
    <>
      <Head>
        <title>RXN Input - Documentation</title>
      </Head>

      <Layout SelectedPage={'DOCS'}>
        <LayoutContent style={{ marginTop: `7.5rem` }}>
          {!isMobile && (
            <div style={{position: `fixed`, width: `16rem`, height: `80vh` }}>
              <DocsNavigator DocsData={DocsData} />
            </div>
          )}
          <div style={{ position: 'absolute', marginLeft: isMobile ? undefined : `16rem`, paddingLeft: isMobile ? undefined : '2rem' }}>
            <p style={{ fontSize: '3.2rem', marginTop: 0, paddingTop:0, marginBottom:'1rem', fontWeight:'bold' }}>{doc.frontmatter.title}</p>
            <MDXRemote components={MdxComponents} {...source} />
          </div>
        </LayoutContent>
      </Layout>
    </>
  );
}

export const getStaticProps = async ({ params }: any) => {
  const doc = getDocBySlug(DocsData, params?.slug) as any;
  const mdxSource = await serialize(doc?.body, { parseFrontmatter: true });

  return {
    props: {
      url: params?.slug ? Array.from(params.slug).join('/') : '/',
      doc: doc,
      source: mdxSource,
    },
  };
};

export const getStaticPaths: GetStaticPaths<{ slug: Array<string> | undefined }> = async () => {
  const paths: Array<{ params: { slug: Array<string> | undefined } }> = [];

  Object.keys(DocsData).forEach((version) => {
    Object.keys((DocsData as any)[version]).forEach((folder) => {
      Object.keys((DocsData as any)[version][folder]).forEach((docName) => {
        (DocsData as any)[version][folder][docName].slugs.forEach((slug: string) => {
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
