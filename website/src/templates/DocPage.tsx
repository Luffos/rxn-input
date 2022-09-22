/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useEffect} from 'react';
import Layout from '../components/Layout';

import c from '../../public/docs/test.json';

function DocPage({pageContext, children}: any) {
  const context = pageContext;

  console.log(context);
  console.log(c);

  return (
    <>
      <Layout SelectedPage={'DOCS'} MobileExtraTopBar={<h1>Test test</h1>}>
        <div style={{marginTop: 10}}>
          {/* <div style={{marginTop: 10, marginBottom: 10, color: `white`}}>ID: {context?.id}</div>
          <MDXProvider>{children}</MDXProvider> */}

          <h1 style={{textAlign: 'center', fontSize:'1rem'}}>Working on it...</h1>
        </div>
      </Layout>
    </>
  );
}

export default DocPage;
