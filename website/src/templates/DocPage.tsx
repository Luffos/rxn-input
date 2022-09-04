import React from 'react';
import Layout from '../components/Layout';

function DocPage({pageContext}: any) {
  const context = pageContext;

  return (
    <>
      <Layout TopBarSelected={'DOCS'}>
        <div style={{position: `absolute`, width: '100%', marginTop: '10vmin'}}>
          <div>
            ID: {context.id} {context.body}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default DocPage;
