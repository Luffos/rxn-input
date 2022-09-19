import React from 'react';
import {HeadFC} from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/Layout';

import DeviceSVG from '../assets/Devices.svg';
import MediaQueries from '../styles/MediaQueries';


// ----- x ----- --=-- ----- x --------=-------- x ----- --=-- ----- x ----- //

const devicesBreakingRangeWidth = '1160px';

const Section1 = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: unset;

  @media (max-width: ${devicesBreakingRangeWidth}) {
    flex-direction: column;
    align-items: center;
  }
`;
const BigTitle = styled.h1`
  padding: 0;
  margin: 0;
  color: white;
  font-size: 2.8rem;

  @keyframes BigTitle_myAnim {
    0% {
      transform: rotateY(1deg) translateY(2.5rem);
      opacity: 0;
    }
    100% {
      transform: rotateY(0deg) translateY(0);
      opacity: 1;
    }
  }

  animation: BigTitle_myAnim  1.5s;

  @media (max-width: ${devicesBreakingRangeWidth}) {
    text-align: center;
  }

  @media ${MediaQueries.isMobile} {
    text-align: center;
    font-size: 1.5rem;
  }
`;

const SubBigTitle = styled.h2`
  padding: 0;
  margin: 0;
  margin-top: 1rem;
  margin-bottom: 2rem;
  color: #94a3b8;
  font-size: 1.8rem;

  
  @keyframes SubBigTitle_myAnim {
    0% {
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: SubBigTitle_myAnim 3s;

  @media (max-width: ${devicesBreakingRangeWidth}) {
    text-align: center;
  }

  @media ${MediaQueries.isMobile} {
    text-align: center;
    font-size: 1rem;
  }

  & > span {
    color: #1cb0fa;
  }
`;

const DevicesImage = styled.div`
  margin-left: auto;
  width: 500px;
  height: 400px;

  & > svg {
    position: absolute;
    width: 500px;
    margin-top: -35px;
  }

  @media (max-width: ${devicesBreakingRangeWidth}) {
    margin-left: unset;

    & > svg {
      margin-top: 0px;
    }
  }

  @media ${MediaQueries.isMobile} {
    width: 250px;
    height: 150px;

    & > svg {
      margin-top: -20px;
      width: 250px;
      height: 150px;
    }
  }
`;

// ----- x ----- --=-- ----- x --------=-------- x ----- --=-- ----- x ----- //

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Section1>
          <div>
            <BigTitle>
              Cross-Platform Input Handler <br /> for React and React Native.
            </BigTitle>
            <SubBigTitle>
              <span>Mouse</span>, <span>Touches</span>, <span>Keyboard</span> and <span>Gamepad</span>
            </SubBigTitle>
          </div>
          <DevicesImage>
            <DeviceSVG />
          </DevicesImage>
        </Section1>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>RXN Input - Cross Platform Input Handler for React and React Native.</title>;
