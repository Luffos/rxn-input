import React from 'react';
import type {HeadFC} from 'gatsby';
import Layout from '../components/Layout';

const DocsPage = () => {
  return (
    <>
      <Layout SelectedPage={'DOCS'}></Layout>
    </>
  );
};

export default DocsPage;

export const Head: HeadFC = () => <title>RXN Input - Documentation</title>;
