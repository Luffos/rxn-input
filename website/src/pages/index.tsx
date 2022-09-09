import * as React from 'react';
import type {HeadFC} from 'gatsby';
import Layout from '../components/Layout';

import * as style from '../styles/index.module.css';

import {FadeIn, SlideInDown, SlideInLeft, SlideInRight, SlideInUp, wipeInY} from 'react-animated-components';
import useMediaQuery from '../hooks/useMediaQuery';

import Devices from '../assets/Devices.png';

const Gspan = ({children}: {children: string}) => {
  return <span style={{color: `#94A3B8`}}>{children}</span>;
};

const IndexPage = () => {
  const [canShowAnimations, setCanShowAnimations] = React.useState(false);

  const MQ_Full = useMediaQuery('(min-width: 1280px)');

  React.useEffect(() => {
    setCanShowAnimations(true);
  }, []);

  return (
    <>
      <Layout>
        {canShowAnimations && (
          <FadeIn delayMs={300}>
            <div id={style.lights} />
          </FadeIn>
        )}
        <div id={style.content}>
          {canShowAnimations && (
            <div style={{display: `flex`, flexDirection: MQ_Full ? `row` : 'column'}}>
              <div style={{marginTop: MQ_Full ? 60 : undefined}}>
                <SlideInUp durationMs={1200}>
                  <FadeIn delayMs={500}>
                    <h1 className={style.header1}>
                      Cross-Platform Input Handler <br /> for React and React Native
                    </h1>
                  </FadeIn>
                  <FadeIn durationMs={1500} delayMs={1700}>
                    <SlideInUp delayMs={1500}>
                      <h2 className={style.header2}>
                        Mouse<Gspan>,</Gspan> Touches<Gspan>,</Gspan> Keyboard <Gspan>and</Gspan> Gamepad
                      </h2>
                    </SlideInUp>
                  </FadeIn>
                </SlideInUp>
              </div>
              <FadeIn style={{display: `flex`, marginLeft: MQ_Full ? `auto` : undefined, justifyContent: `center`, alignItems: `center`}} durationMs={1000} delayMs={1200}>
                <div style={{alignSelf: 'center', backgroundImage: `url(${Devices})`, backgroundSize: `contain`, backgroundRepeat: `no-repeat`, minWidth: `20vw`, width: MQ_Full ? `600px` : `380px`, aspectRatio: `1`}} />
              </FadeIn>
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>RXNInput - Cross Platform Input Handler for React and React Native.</title>;
