import styled from 'styled-components';
import BreakPoints from '../styles/theme/BreakPoints';
import Colors from '../styles/theme/Colors';

export const Title = styled.h1`
  margin: 0px;
  padding: 0;
  font-size: 3rem;

  ${BreakPoints.down('md')} {
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

  ${BreakPoints.down('md')} {
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
