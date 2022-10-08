import styled from 'styled-components';
import BreakPoints from '../../styles/theme/BreakPoints';
import Sizes from '../../styles/theme/Sizes';

export const LayoutContent = styled.div`
  display: inline;
  padding-left: 2rem;
  padding-right: 2rem;
  display: block;
  box-sizing: border-box;
  max-width: ${Sizes.maxWidth};
  margin-left: auto;
  margin-right: auto;
  padding-left: 2rem;
  padding-right: 2rem;

  ${BreakPoints.down('md')} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
