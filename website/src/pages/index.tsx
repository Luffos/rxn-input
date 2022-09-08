import * as React from 'react';
import type {HeadFC} from 'gatsby';
import Layout from '../components/Layout';

import * as style from '../styles/index.module.css';

import {FadeIn, SlideInDown, SlideInLeft, SlideInRight, SlideInUp, wipeInY} from 'react-animated-components';

const Gspan = ({children}: {children: string}) => {
  return <span style={{color: `#94A3B8`}}>{children}</span>;
};

const IndexPage = () => {
  const [showText, setShowText] = React.useState(false);

  React.useEffect(() => {
    setShowText(true);
  }, []);

  return (
    <>
      <Layout>
        <div id={style.lights} />
        <div id={style.content}>
          {showText && (
            <SlideInUp durationMs={1200}>
              <FadeIn delayMs={500}>
                <h1 className={style.header1}>
                  Cross-Platform Input Handler <br /> for React and React Native
                </h1>
              </FadeIn>
              <FadeIn durationMs={2000} delayMs={1700}>
                <SlideInUp delayMs={1500}>
                  <h2 className={style.header2}>
                    Mouse<Gspan>,</Gspan> Touches<Gspan>,</Gspan> Keyboard <Gspan>and</Gspan> Gamepad
                  </h2>
                </SlideInUp>
              </FadeIn>
            </SlideInUp>
          )}
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>RXNInput - Cross Platform Input Handler for React and React Native.</title>;
