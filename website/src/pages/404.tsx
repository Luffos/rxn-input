import * as React from 'react';
import type {HeadFC} from 'gatsby';
import Layout from '../components/Layout';

const NotFoundPage = () => {
  return (
    <>
      <Layout TopBarSelected={'NOT_FOUND'}>
        <div style={{width: '100%', height: '100vh'}}></div>
      </Layout>
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>RXNInput - Documentation</title>;
