import styled from 'styled-components';

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  font-weight: bold;

  & h3 {
    font-size: 1.2rem;
    margin: 0;
    padding: 0;
    margin-bottom: 1.7rem;

    &:not(first-child) {
      margin-top: 1.7rem;
    }
  }
`;

export const Li = styled.li`
  width: fit-content;
  margin-bottom: 0.3rem;

  & p {
    margin: 0;
    padding: 0;
    color: #94a3b8;
    font-weight: normal;
    font-size: 1.02rem;

    &::before {
      content: ' ';
      margin-right: 1.1rem;
      padding-bottom: 0.2rem;
      padding-top: 0.2rem;
      white-space: pre;
      background-color: #94a3b8;
      width: 3rem;
      height: 100%;
    }

    &:hover {
      color: #1cb0fa;

      &::before {
        background-color: #1cb0fa;
      }
    }

    &:nth-of-type(1) {
      & p {
        &::before {
          border-radius: 1rem 0px 0px 0px;
        }
      }
    }

    &:last-child {
      & p {
        &::before {
          border-radius: 0rem 0px 0px 1rem;
        }
      }
    }
  }
`;
