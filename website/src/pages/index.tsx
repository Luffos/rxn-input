import * as React from 'react';
import type {HeadFC} from 'gatsby';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <>
      <Layout />
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <title>
    RXNInput - Cross Platform Input Handler for React and React Native.
  </title>
);
