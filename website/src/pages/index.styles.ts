import styled from 'styled-components';
import Colors from '../styles/theme/Colors';

export const SubTitle = styled.h2`
  margin: 0;
  margin-top: 1.5rem;
  padding: 0;
  font-size: 1.8rem;
  color: ${Colors.ZIMABLUE};

  & > span {
    color: ${Colors.BLUEBLOUSE};
  }
`;
