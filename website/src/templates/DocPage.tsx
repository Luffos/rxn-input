/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useEffect} from 'react';
import Layout from '../components/Layout';

import docsData from '../../public/docs/data.json';
import {MDXProvider} from '@mdx-js/react';
import useWindowSize from '../hooks/useWIndowSize';

// {Object.keys(docsData['v2.0.0']).map(a => {
//   return (
//     <ul>
//       <h2>{a}</h2>

//       {
//         //@ts-ignore
//         docsData['v2.0.0'][a].map((f: any) => {
//           return <li>{f?.frontmatter?.title || `test`}</li>;
//         })
//       }
//     </ul>
//   );
// })}

function DocPage({pageContext, children}: any) {
  const context = pageContext;

  const {height} = useWindowSize();

  console.log(context);
  console.log(docsData);

  return (
    <>
      <Layout SelectedPage={'DOCS'} MobileExtraTopBar={<h1>Test test</h1>}>
        {/* <div style={{marginTop: 10, marginBottom: 10, color: `white`}}>ID: {context?.id}</div>*/}

        <div style={{position: `fixed`, height: height - 72, top: 72, width: 250, overflowY: `scroll`, overflowX: `hidden`}}>
          <div style={{marginTop: 45}}>
            {Object.keys(docsData['v2.0.0']).map(a => {
              return (
                <ul>
                  <h3>{a}</h3>

                  {
                    //@ts-ignore
                    docsData['v2.0.0'][a].map((f: any) => {
                      return <li>{f?.frontmatter?.title || `test`}</li>;
                    })
                  }
                </ul>
              );
            })}
          </div>
        </div>

        <div style={{marginLeft: `22rem`, marginTop: 100}}>
          {children && (
            <>
              <h1 style={{fontSize: `3rem`, margin: 0, marginBottom: `2rem`, padding: 0}}>{context.frontmatter.title}</h1>
              <MDXProvider
                components={{
                  p: ({children}) => <p style={{color: `rgba(148, 163, 184, 1)`}}>{children}</p>,
                  code: ({children}) => (
                    <p
                      style={{
                        width: `fit-content`,
                        minWidth: `20rem`,
                        background: `rgba(5, 2, 24, 0.42)`,
                        padding: `1rem`,
                        borderRadius: `0.1rem`
                      }}>
                      {children}
                    </p>
                  )
                }}>
                {children}
              </MDXProvider>
            </>
          )}
        </div>
      </Layout>
    </>
  );
}

export default DocPage;
