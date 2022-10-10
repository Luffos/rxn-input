import styled from 'styled-components';
import Colors from '../../styles/theme/Colors';

export const MainUl = styled.ul`
  & > p {
    display: inline-block;
    margin-left: 0.5rem;
    margin-top: 0.75rem;
    font-size: 1.2rem;
    font-weight: 800;
  }

  margin: 0;
  padding: 0;
  margin-bottom: 2rem;
  list-style: none;

  &[data-navclosed] {
    & > li {
      display: none;
    }
  }

  & > li > a {
    margin: 0;
    margin-left: 0.5rem;
    font-size: 0.95rem;
    color: ${Colors.BLUEBLOUSE};

    &:hover {
      color: ${Colors.ZIMABLUE};
    }

    &[data-current-doc='true'] {
      color: ${Colors.ZIMABLUE};
    }
  }
`;
