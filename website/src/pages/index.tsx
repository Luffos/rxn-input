import React, {useEffect, useLayoutEffect, useState} from 'react';
import {HeadFC, Link} from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';

import DeviceSVG from '../assets/Devices.svg';
import MediaQueries from '../styles/ts/MediaQueries';
import {BigTitle, devicesBreakingRangeWidth, DevicesImage, GetStartedButton, Section1, SubBigTitle} from '../styles/ts/Page-Index';
import useMediaQuery from '../hooks/useMediaQuery';
import {FadeIn, wipeInY} from 'react-animated-components';
import BreakPoints from '../styles/ts/BreakPoints';

const IndexPage = () => {
  const breakDevices = useMediaQuery(`(max-width: ${devicesBreakingRangeWidth})`);
  const [showSection1Anims, setShowSection1Anims] = useState(false);

  useLayoutEffect(() => {
    setShowSection1Anims(true);
  }, []);

  return (
    <>
      <Layout>
        {showSection1Anims && (
          <FadeIn durationMs={3000}>
            <Section1>
              <div
                style={{
                  position: 'absolute',
                  width: '100%',
                  maxWidth: BreakPoints.maxWide,
                  height: 250,
                  filter: 'blur(8rem)',
                  background: 'radial-gradient(50% 41.03% at 50% 58.97%, rgba(0, 131, 255, 0) 50%, #0083FF 28.65%, #1900f59e 81.25%, rgba(0, 131, 255, 0) 99.99%)',
                  left: '50%',
                  marginTop:20,
                  opacity: 0.8,
                  transform: 'translateX(-50%)'
                }}
              />
              <div style={{position: 'relative'}}>
                <BigTitle>
                  Cross-Platform Input Handler <br /> for React and React Native.
                </BigTitle>
                <SubBigTitle>
                  <span>Mouse</span>, <span>Touches</span>, <span>Keyboard</span> and <span>Gamepad</span>
                </SubBigTitle>
                <FadeIn delayMs={1500} durationMs={2500}>
                  <Link style={{display: breakDevices ? 'none' : 'flex', width: 'fit-content'}} to={'/docs'}>
                    <GetStartedButton>Get started</GetStartedButton>
                  </Link>
                </FadeIn>
              </div>

              <DevicesImage>
                <DeviceSVG />
              </DevicesImage>
              <FadeIn delayMs={1500} durationMs={2500}>
                <Link style={{display: !breakDevices ? 'none' : 'flex', width: 'fit-content'}} to={'/docs'}>
                  <GetStartedButton>Get started</GetStartedButton>
                </Link>
              </FadeIn>
            </Section1>
          </FadeIn>
        )}
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>RXN Input - Cross Platform Input Handler for React and React Native.</title>;
