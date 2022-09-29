import Link from 'next/link';
import React from 'react';
import LogoSVG from '../../../assets/Logo.svg';
import GitHubSVG from '../../../assets/github-icon.svg';
import {
  ContentWrapper,
  InnerWrapper,
  RItems,
  Wrapper
} from './styles';

const TopBar = () => {
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
          </ContentWrapper>
        </InnerWrapper>
      </Wrapper>
  );
};

export default TopBar;
