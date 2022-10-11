import styled from 'styled-components';
import Colors from '../../styles/theme/Colors';

export const H1 = styled.h1`
  font-size: 1.8rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const P = styled.p`
  color: ${Colors.BLUEBLOUSE};
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 1.1rem;

  & > code {
    display: block;
    margin-left: 0.2rem;
    padding: 0.5rem;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 0.4rem;
    color: ${Colors.ZIMABLUE};
    font-size: 0.9rem;
    overflow: auto;
  }
`;

export const A = styled.a`
  cursor: pointer;
  color: ${Colors.ZIMABLUE};
  border-bottom: solid 1px ${Colors.ZIMABLUE};
`;

export const Code = styled.div`
  min-width: 10rem;
  padding-bottom: 1rem;
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
  background-color: rgba(0, 0, 0, 0.2) !important;
  border-radius: 0.4rem;
  font-size: 0.9rem;

  overflow: auto;

  .inserted-sign {
    background-color: rgba(0, 200, 0, 0.06);
  }
`;
