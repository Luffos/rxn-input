import styled from 'styled-components';
import BreakPoints from '../../../styles/theme/BreakPoints';
import Colors from '../../../styles/theme/Colors';

export const MobileMenuWrapper = styled.div`
  display: none;

  position: fixed;
  z-index: 9999905;
  overflow: hidden;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  ${BreakPoints.down('md')} {
    display: block;
  }
`;

export const MobileMenuBackground = styled.div`
  position: fixed;
  z-index: 9999903;
  flex: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(1, 10, 43, 0.3) 0%,
    rgba(7, 3, 34, 0.2) 100%
  );
  backdrop-filter: blur(2px);
`;

export const MobileMenuBox = styled.div`
  position: fixed;
  z-index: 9999904;
  color: white;
  width: 200px;
  height: 250px;
  right: 8px;
  top: 8px;
  background: linear-gradient(180deg, rgba(5, 2, 24, 0.9) 0%, #0b091f 100%);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(148, 163, 184, 0.12);
  border-radius: 24px 0px 24px 12px;
  & .closeWrapper {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    margin-left: 8px;
    margin-right: 8px;
    margin-top: 18px;
    margin-left: auto;
    & > svg > path {
      transition: fill 0.1s ease-in-out;
    }
    &:hover > svg > path {
      fill: ${Colors.CLOUDLESS};
    }
  }
  & > ul {
    width: 100%;
    margin: 0;
    margin-top: 8px;
    padding: 0;
    list-style: none;
    text-align: center;
    & > li {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      & > a:hover {
        & > p {
          color: white;
        }
        & > svg > path {
          fill: white;
        }
      }
      & > a:not(.github):hover {
        & > p {
          color: ${Colors.ZIMABLUE};
        }
        & > svg > path {
          fill: ${Colors.ZIMABLUE};
        }
      }
      & > a {
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        &[data-currentpage='true'] {
          & > p {
            color: ${Colors.ZIMABLUE};
          }
        }
        & > p {
          user-select: none;
          font-size: 16px;
          letter-spacing: 0.01rem;
          display: inline;
          color: ${Colors.BLUEBLOUSE};
          font-weight: 600;
          transition: color 0.1s ease-in-out;
        }
        & > svg {
          margin-left: 8px;
          width: 22px;
          height: 22px;
          & > path {
            transition: fill 0.1s ease-in-out;
          }
        }
      }
    }
  }
`;
