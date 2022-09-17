/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import useUnits from 'rxn-units';
import Layout from '../components/Layout';
import {MDXProvider} from '@mdx-js/react';

function DocPage({pageContext, children}: any) {
  const context = pageContext;

  const {vmin, vw, vh} = useUnits();

  return (
    <>
      <Layout SelectedPage={'DOCS'} MobileExtraTopBar={<h1>Test test</h1>}>
        <div style={{marginTop: 140}}>
          {/* <div style={{marginTop: 10, marginBottom: 10, color: `white`}}>ID: {context?.id}</div>
          <MDXProvider>{children}</MDXProvider> */}

          <h1 style={{textAlign: 'center', fontSize:'1rem'}}>Working on it...</h1>
        </div>
      </Layout>
    </>
  );
}

export default DocPage;
