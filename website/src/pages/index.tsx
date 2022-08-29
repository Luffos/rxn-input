import * as React from 'react';
import type {HeadFC} from 'gatsby';
import useUnits from 'rxn-units';
import Layout from '../components/Layout';

import Typewriter from 'typewriter-effect';

import {useWindowDimensions} from 'react-native';
import {FadeIn, SlideInDown, SlideInLeft, SlideInRight, SlideInUp, wipeInY} from 'react-animated-components';

const IndexPage = () => {
  const {width, height} = useWindowDimensions();
  const {vmin, vh} = useUnits();

  return (
    <>
      <Layout>
        <div style={{width: '100%', height: vh(100)}}>
          <div style={{position: `absolute`, width: '100%', marginTop: vmin(10)}}>
            <FadeIn>
              <SlideInUp durationMs={500}>
                <div style={{marginLeft: vmin(20), marginRight: vmin(20), fontSize: vmin(4)}}>
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
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>RXNInput - Cross Platform Input Handler for React and React Native.</title>;
