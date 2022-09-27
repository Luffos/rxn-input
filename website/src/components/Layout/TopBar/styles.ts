import styled from "styled-components";
import Sizes from "../../../styles/theme/Sizes";

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  display: block;
  flex: none;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  width: 100%;
`;

export const ContentWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  background: darkgray;
  width: 100vw;
  min-height: 2rem;
  min-width: 300px;
  max-width: ${Sizes.maxWidth};
  padding-left: 2rem;
  padding-right: 2rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  /* @media {MediaQueries.isMobile} {
    padding-left: 1rem;
    padding-right: 1rem;
  } */

  & > .logoWrapper {
    display: inline-flex;
    vertical-align: middle;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 25px;

    & > svg {
      pointer-events: none;
      position: relative;
    }
  }
`;
