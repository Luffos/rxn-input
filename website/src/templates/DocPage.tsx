import React, {useEffect, useRef, useState} from 'react';
import {useWindowDimensions} from 'react-native';
import useUnits from 'rxn-units';
import Layout from '../components/Layout';
import {MDXProvider} from '@mdx-js/react';

function DocPage({pageContext, children}: any) {
  const context = pageContext;

  const {vmin, vw, vh} = useUnits();

  return (
    <>
      <Layout withoutDefaultFooter TopBarSelected={'DOCS'}>
        <div style={{overflowY: `auto`, backdropFilter: `blur(1.1vmin) brightness(140%)`, backgroundColor: `#00000094`, position: `fixed`, width: `30vmin`, top: `6vmin`, bottom: `6vmin`, height: vh(100) - vmin(6), alignSelf: `flex-end`, display: `flex`}}>
          <div style={{marginTop: `1vmin`, marginBottom: `1vmin`, color: `white`}}>
            ID: {context.id}
          </div>
        </div>
        <div style={{display: `flex`, flexDirection: `row`, minHeight: `100vh`}}>
          <div style={{width: `30vmin`, alignSelf: `flex-end`, display: `flex`}} />
          <div style={{margin:'5vmin', width: vw(100)-vmin(30), marginTop: '6vmin', position: 'relative'}}>
            <MDXProvider>{children}</MDXProvider>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default DocPage;
