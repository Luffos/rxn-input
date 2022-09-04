import * as React from 'react';
import type {HeadFC} from 'gatsby';
import Layout from '../components/Layout';

import Typewriter from 'typewriter-effect';

import {FadeIn, SlideInDown, SlideInLeft, SlideInRight, SlideInUp, wipeInY} from 'react-animated-components';

const IndexPage = () => {
  return (
    <>
      <Layout>
        <div style={{position: `absolute`, width: '100%', marginTop: '10vmin'}}>
          <React.Suspense>
            <FadeIn delayMs={700}>
              <SlideInUp delayMs={700} durationMs={900}>
                <div style={{marginLeft: '20vmin', marginRight: '20vmin', fontSize: '4vmin'}}>
                  <h1 style={{color: `white`, whiteSpace: 'nowrap'}}>
                    Input Handler for <br />{' '}
                    <Typewriter
                      options={{
                        strings: [`React`, `React and React Native`],
                        autoStart: true,
                        loop: true
                      }}
                    />
                  </h1>
                </div>
              </SlideInUp>
            </FadeIn>
          </React.Suspense>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>RXNInput - Cross Platform Input Handler for React and React Native.</title>;
