import styled from 'styled-components';
import BreakPoints from '../theme/BreakPoints';
import Colors from '../theme/Colors';
import Sizes from '../theme/Sizes';

export const Section1 = styled.div`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  animation: fadeIn 5s;
`;

export const Section1Content = styled.div`
  display: flex;
  flex-direction: row;

  ${BreakPoints.down('lg')} {
    flex-direction: column;
  }
`;

export const Section1Background = styled.div`
  position: absolute;
  width: 100%;
  max-width: ${Sizes.maxWidth};
  height: 250px;
  filter: blur(8rem);
  background: radial-gradient(50% 41.03% at 50% 58.97%, rgba(0, 131, 255, 0) 50%, rgb(0, 131, 255) 28.65%, rgba(0, 25, 245, 0.62) 81.25%, rgba(0, 131, 255, 0) 99.99%);
  left: 50%;
  margin-top: 20px;
  opacity: 0.8;
  transform: translateX(-50%);
  z-index: 0;
`;

export const Title = styled.h1`
  margin: 0px;
  padding: 0;
  font-size: 3rem;

  ${BreakPoints.down('lg')} {
    margin-left: auto;
    margin-right: auto;
    align-self: center;
    text-align: center;
  }

  ${BreakPoints.down('md')} {
    font-size: 2rem;
  }

  ${BreakPoints.down('sm')} {
    font-size: 1.4rem;
  }
`;

export const SubTitle = styled.h2`
  margin: 0;
  margin-top: 1.5rem;
  padding: 0;
  font-size: 1.8rem;
  color: ${Colors.ZIMABLUE};

  ${BreakPoints.down('lg')} {
    margin-left: auto;
    margin-right: auto;
    align-self: center;
    text-align: center;
  }

  ${BreakPoints.down('md')} {
    font-size: 1.2rem;
  }

  ${BreakPoints.down('sm')} {
    font-size: 0.9rem;
  }

  & > span {
    color: ${Colors.BLUEBLOUSE};
  }
`;

export const DevicesWrapper = styled.div`
  margin-left: auto;
  margin-top: -2.5rem;
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;

  ${BreakPoints.down('lg')} {
    margin-top: 4rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 0rem;
    width: 400px;
    height: 300px;

    & > svg {
      align-self: end;
    }
  }

  ${BreakPoints.down('md')} {
    margin-top: 0rem;
    width: 300px;
    height: 260px;
  }

  ${BreakPoints.down('sm')} {
    margin-top: 0.5rem;
    width: 240px;
    height: 240px;

    & > svg {
      align-self: end;
    }
  }
`;

export const GetStartedButton = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  color: white;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 0.08rem;
  width: 16rem;
  height: 4rem;
  background: linear-gradient(180deg, rgba(16, 117, 255, 0.9) 0%, rgba(9, 115, 223, 0.9) 0.01%, rgba(18, 21, 93, 0.9) 100%);
  border: 0.1rem solid #0b4ea8;
  border-radius: 1rem;
  transition: 0.1s filter linear;
  &:hover {
    filter: brightness(140%);
  }

  ${BreakPoints.down('lg')} {
    margin-top: 1rem;
    margin-left: auto;
    margin-right: auto;
  }

  ${BreakPoints.down('md')} {
    margin-top: 0rem;
    width: 14rem;
    height: 3.5rem;
    font-size: 1rem;
  }

  ${BreakPoints.down('sm')} {
    margin-top: 0rem;
    width: 12rem;
    height: 3rem;
    font-size: 0.9rem;
  }
`;
