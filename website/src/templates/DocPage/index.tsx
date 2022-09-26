/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useEffect} from 'react';
import Layout from '../../components/Layout';

import {MDXProvider} from '@mdx-js/react';
import useWindowSize from '../../hooks/useWIndowSize';
import NavigationMenuContent from './NavigationMenuContent';
import {Link, useScrollRestoration} from 'gatsby';
import MediaQueries from '../../styles/ts/MediaQueries';
import useMediaQuery from '../../hooks/useMediaQuery';
import {_MDXComponents} from './styled-mdx-components';
import styled from 'styled-components';
import BreakPoints from '../../styles/ts/BreakPoints';

function DocPage({pageContext, children}: any) {
  const context = pageContext;

  const isDesktop = useMediaQuery(MediaQueries.isDesktop);
  const {height} = useWindowSize();

  //console.log(context);

  return (
    <>
      <Layout SelectedPage={'DOCS'} MobileExtraTopBar={<h1>Test test</h1>}>
        {isDesktop && (
          <div style={{position: `fixed`, height: height - 72, top: 72, width: 250, overflowY: `scroll`, overflowX: `hidden`}}>
            <div style={{marginTop: 40}}>
              <NavigationMenuContent />
            </div>
          </div>
        )}

        <Background />
        <div style={{marginLeft: isDesktop ? `18rem` : undefined, marginTop: 100, paddingBottom: `3rem`, zIndex: 100, position:`relative`}}>
          {children && (
            <>
              <h1 style={{fontSize: `3.1rem`, fontWeight:`bold`, margin: 0, marginBottom: `1rem`, padding: 0}}>{context.frontmatter.title}</h1>
              <MDXProvider components={_MDXComponents}>{children}</MDXProvider>
            </>
          )}
        </div>
      </Layout>
    </>
  );
}

export const Background = styled.div`
  position: absolute;
  width: 80%;
  max-width: ${BreakPoints.maxWide};
  aspect-ratio: 1;
  height: 30rem;
  max-height: 90vh;
  filter: blur(8rem);
  background: radial-gradient(50% 41.03% at 50% 58.97%, rgba(0, 131, 255, 0) 50%, rgb(0, 131, 255) 28.65%, rgba(0, 25, 245, 0.62) 81.25%, rgba(0, 131, 255, 0) 99.99%);
  margin-top: 20px;
  top: 7rem;
  right: 0;
  opacity: 0.8;
`;

export default DocPage;
