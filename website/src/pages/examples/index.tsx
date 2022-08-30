import * as React from 'react';
import type {HeadFC} from 'gatsby';
import Layout from '../../components/Layout';

const ExamplesPage = () => {
  return (
    <>
      <Layout TopBarSelected={'EXAMPLES'}></Layout>
    </>
  );
};

export default ExamplesPage;

export const Head: HeadFC = () => <title>RXNInput - Examples</title>;
