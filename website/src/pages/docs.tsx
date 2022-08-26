import * as React from 'react';
import type {HeadFC} from 'gatsby';
import Layout from '../components/Layout';

const DocsPage = () => {
  return (
    <>
      <Layout />
    </>
  );
};

export default DocsPage;

export const Head: HeadFC = () => <title>RXNInput - Documentation</title>;
