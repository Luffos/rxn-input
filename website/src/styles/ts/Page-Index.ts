import React from 'react';
import {HeadFC} from 'gatsby';
import styled from 'styled-components';

import DeviceSVG from '../assets/Devices.svg';
import MediaQueries from './MediaQueries';

export const devicesBreakingRangeWidth = '1250px';

export const Section1 = styled.h1`
  display: flex;
  flex-direction: row;
  align-items: unset;

  @media (max-width: ${devicesBreakingRangeWidth}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BigTitle = styled.h1`
  padding: 0;
  margin: 0;
  color: white;
  font-size: 2.8rem;

  @keyframes BigTitle_myAnim {
    0% {
      opacity: 0;
    }
    40% {
      transform: rotateY(1deg) translateY(2.5rem);
      opacity: 0;
    }
    100% {
      transform: rotateY(0deg) translateY(0);
      opacity: 1;
    }
  }

  animation: BigTitle_myAnim 2s;

  @media (max-width: ${devicesBreakingRangeWidth}) {
    text-align: center;
  }

  @media ${MediaQueries.isMobile} {
    text-align: center;
    font-size: 1.5rem;
  }
`;

export const SubBigTitle = styled.h2`
  padding: 0;
  margin: 0;
  margin-top: 1.5rem;
  margin-bottom: 2.5rem;
  color: #94a3b8;
  font-size: 1.8rem;

  @keyframes SubBigTitle_myAnim {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: SubBigTitle_myAnim 3.5s;

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

export const DevicesImage = styled.div`
  margin-left: auto;
  width: 500px;
  height: 400px;

  @keyframes DevicesImage_myAnim {
    0% {
      transform: translateY(2.5rem);
      opacity: 0;
    }
    40% {
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  & > svg {
    animation: DevicesImage_myAnim 4s;
    position: absolute;
    width: 500px;
    margin-top: -35px;
  }

  @media (max-width: ${devicesBreakingRangeWidth}) {
    margin-left: unset;
    width: 400px;
    height: 320px;

    & > svg {
      margin-top: -35px;
      width: 400px;
      height: 320px;
    }
  }

  @media ${MediaQueries.isMobile} {
    width: 250px;
    height: 180px;

    & > svg {
      margin-top: -25px;
      width: 250px;
      height: 180px;
    }
  }
`;

export const GetStartedButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  user-select: none;

  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 0.08rem;

  width: 300px;
  height: 65px;
  left: 100px;
  top: 471px;

  background: linear-gradient(180deg, rgba(16, 117, 255, 0.9) 0%, rgba(9, 115, 223, 0.9) 0.01%, rgba(18, 21, 93, 0.9) 100%);
  border: 0.1rem solid #0b4ea8;
  border-radius: 1.4rem;

  @media ${MediaQueries.isMobile} {
    width: 250px;
    height: 50px;
    font-size: 0.9rem;
  }
`;
