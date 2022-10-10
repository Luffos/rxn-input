import styled from 'styled-components';
import Colors from '../../styles/theme/Colors';

export const P = styled.p`
  color: ${Colors.BLUEBLOUSE};
`;

export const A = styled.a`
  color: ${Colors.ZIMABLUE};
  border-bottom: solid 1px ${Colors.ZIMABLUE};
`;

export const Code = styled.div`
  width: 25rem;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 0.2rem;
  font-size: 1rem;
  color: ${Colors.BLUEBLOUSE};
`;
