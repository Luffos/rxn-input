import * as React from 'react';
import type {HeadFC} from 'gatsby';
import Layout from '../components/Layout';

const NotFoundPage = () => {
  return (
    <>
      <Layout TopBarSelected={'NOT_FOUND'} />
    </>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>RXNInput - Documentation</title>;
