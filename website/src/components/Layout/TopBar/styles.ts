import styled from 'styled-components';
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

  & > .logoWrapper {
    display: inline-flex;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
    width: 180px;
    height: 30px;

    & > svg {
      pointer-events: none;
      position: relative;
    }
  }
`;
