import React from 'react';
import type {HeadFC} from 'gatsby';
import Layout from '../components/Layout';

const ExamplesPage = () => {
  return (
    <>
      <Layout SelectedPage={'EXAMPLES'}></Layout>
    </>
  );
};

export default ExamplesPage;

export const Head: HeadFC = () => <title>RXN Input - Examples</title>;
