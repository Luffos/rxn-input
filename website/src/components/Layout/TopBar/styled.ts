import styled from 'styled-components';
import BreakPoints from '../../../styles/ts/BreakPoints';
import MediaQueries from '../../../styles/ts/MediaQueries';

export const TopBarWrapper = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  z-index: 99901;

  &[data-scrolled='true'] {
    background: linear-gradient(rgba(11, 9, 33, 0.5) 0%, rgba(8, 6, 24, 0.8) 100%);
    transition: background 0.1s ease-in-out;
    backdrop-filter: blur(8px);
  }
`;

export const TopBarBase = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  width: 100%;
`;

export const TopBarContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  max-width: ${BreakPoints.maxWide};

  width: 100%;
  height: 100%;

  padding-left: 2rem;
  padding-right: 2rem;

  @media ${MediaQueries.isMobile} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const LeftItems = styled.div`
  display: flex;
  align-items: center;

  & > .logoWrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 180px;

    @media ${MediaQueries.isMobile} {
      width: 160px;
    }

    & > svg {
      transition: 0.1s filter linear;
    }

    &:hover {
      & > svg {
        filter: brightness(140%);
      }
    }
  }
`;

export const RightItems = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  & ul {
    margin: 0;
    padding: 0;
    display: flex;
    list-style: none;
    align-items: center;

    & li {
      &:not(:first-of-type) {
        margin-left: 4rem;
      }

      & > a[data-currentpage='true'] {
        & > p {
          color: #1cb0fa;

          &::after {
            background-color: #1cb0fa;
          }
        }
      }

      & > a > p {
        position: relative;
        font-size: 0.8rem;
        letter-spacing: 0.05rem;
        color: #94a3b8;
        font-weight: 600;
        text-decoration: none;
        text-transform: uppercase;

        transition: color 0.1s ease-in-out;

        &:hover {
          color: #1cb0fa;

          &::after {
            background-color: #1cb0fa;
          }
        }

        &::after {
          content: '';
          display: block;
          margin: 12px auto auto auto;
          width: 20px;
          height: 5px;
          background-color: #94a3b8;
          border-radius: 20px;
          transition: background-color 0.1s ease-in-out;
        }
      }

      & > .gitHub {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 30px;
        height: 30px;

        & > svg > path {
          cursor: pointer;
          transition: fill 0.1s ease-in-out;
        }

        &:hover > svg > path {
          fill: #d9e8fb;
        }
      }
    }
  }
`;

export const MobileKebab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  cursor: pointer;

  & > svg > path {
    transition: fill 0.1s ease-in-out;
  }

  &:hover > svg > path {
    fill: #d9e8fb;
  }
`;
