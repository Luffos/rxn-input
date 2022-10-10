import styled from 'styled-components';

export const MainUl = styled.ul`

& > p{
    display: inline-block;
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
`;
