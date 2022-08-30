import * as React from 'react';
import type {HeadFC} from 'gatsby';
import Layout from '../components/Layout';

const ExamplesPage = () => {
  return (
    <>
      <Layout TopBarSelected={'EXAMPLES'}>
        <div style={{width: '100%', height: '100vh'}}></div>
      </Layout>
    </>
  );
};

export default ExamplesPage;

export const Head: HeadFC = () => <title>RXNInput - Examples</title>;
