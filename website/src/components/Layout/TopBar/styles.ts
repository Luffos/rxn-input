import styled from 'styled-components';
import Colors from '../../../styles/theme/Colors';
import Sizes from '../../../styles/theme/Sizes';

export const AreaProtector = styled.div`
  display: list-item;
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 0;
  flex: none;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 100%;
`;

export const InnerWrapper = styled.div`
  display: contents;
`;

export const ContentWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: auto;
  margin-bottom: auto;
  width: 100vw;
  max-width: ${Sizes.maxWidth};
  padding-left: 2rem;
  padding-right: 2rem;

  /* @media {MediaQueries.isMobile} {
    padding-left: 1rem;
    padding-right: 1rem;
  } */

  .logoWrapper {
    display: inline-flex;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 30px;

    &:hover {
      & > svg {
        filter: brightness(140%);
      }
    }

    & > svg {
      pointer-events: none;
      position: relative;
      transition: 0.1s filter linear;
    }
  }
`;

export const RItems = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: row;
  list-style: none;
  padding: 0;
  margin-left: auto;

  li,
  a,
  p {
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li:not(:first-child) {
    margin-left: 3.5rem;
  }

  a {
    display: flex;
    flex-direction: column;

    &:hover {
      & > p {
        color: ${Colors.ZIMABLUE};

        &::after {
          background: ${Colors.ZIMABLUE};
        }
      }
    }

    & > p {
      transition: color 0.1s ease-in-out;
      color: ${Colors.BLUEBLOUSE};
      font-size: 0.85rem;
      font-weight: 600;
      letter-spacing: 0.01rem;

      &::after {
        margin-left: auto;
        margin-right: auto;
        margin-top: 0.6rem;
        display: block;
        white-space: pre;
        border-radius: 2rem;
        content: ' ';
        width: 1rem;
        height: 0.4rem;
        background: ${Colors.BLUEBLOUSE};
      }
    }
  }

  .gitHubWrapper {
    display: inline-flex;
    vertical-align: middle;
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
`;
