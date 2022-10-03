/* eslint-disable @typescript-eslint/no-explicit-any */
import {GetStaticPaths, GetStaticProps} from 'next';
import React from 'react';
import Layout, {LayoutContent} from '../../components/Layout';
import DocsData from '../../content/docs/data.json';

export default function DocPage({post}: any) {

  console.log(DocsData)

  return (
    <Layout>
      <LayoutContent style={{marginTop: `8rem`}}>
        <h1>{post}</h1>
      </LayoutContent>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  return {
    props: {
      post: params?.slug + '####'
    }
  };
};

export const getStaticPaths: GetStaticPaths<{
  slug: string;
}> = async () => {

  return {
    paths: [
      {params: {slug: 'getting-started'}},
      {params: {slug: 'a'}},
      {params: {slug: 'b'}}
    ],
    fallback: false
  };
};
