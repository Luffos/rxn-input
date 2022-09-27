import styled from 'styled-components';
import Sizes from '../../styles/theme/Sizes';

export const LayoutContentWrapper = styled.div`
  display: inline;
  padding-left: 2rem;
  padding-right: 2rem;
`;

export const LayoutContentInner = styled.div`
  display: block;
  box-sizing: border-box;
  max-width: ${Sizes.maxWidth};
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;

  /* @media {MediaQueries.isMobile} {
    padding-left: 1rem;
    padding-right: 1rem;
  } */
`;
