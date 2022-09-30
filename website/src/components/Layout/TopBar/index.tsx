import Link from 'next/link';
import React from 'react';
import LogoSVG from '../../../assets/Logo.svg';
import GitHubSVG from '../../../assets/github-icon.svg';
import KebabSVG from '../../../assets/kebab-icon.svg';
import {
  ContentWrapper,
  InnerWrapper,
  MobileKebab,
  RItems,
  Wrapper
} from './styles';
import useMediaQuery from '../../../hooks/useMediaQuery';
import BreakPoints from '../../../styles/theme/BreakPoints';

const TopBar = () => {
  const showKebab = useMediaQuery(BreakPoints.down('md'));

  return (
    <Wrapper>
      <InnerWrapper>
        <ContentWrapper>
          <Link href={'/'}>
            <a className={'logoWrapper'}>
              <LogoSVG viewBox="0 0 247 54" />
            </a>
          </Link>

          <RItems>
            <li>
              <Link href={`/docs`}>
                <a>
                  <p>DOCUMENTATION</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/examples`}>
                <a>
                  <p>EXAMPLES</p>
                </a>
              </Link>
            </li>
            <li>
              <a
                className="gitHubWrapper"
                href="https://github.com/Luffos/rxn-input">
                <GitHubSVG />
              </a>
            </li>
          </RItems>

          {showKebab && (
            <MobileKebab>
              <KebabSVG />
            </MobileKebab>
          )}
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default TopBar;
