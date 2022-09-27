import Link from 'next/link';
import React from 'react';
import Logo from '../../../assets/Logo.svg';
import {AreaProtector, ContentWrapper, InnerWrapper, Wrapper} from './styles';

const TopBar = () => {
  return (
    <AreaProtector>
      <Wrapper>
        <InnerWrapper>
          <ContentWrapper>
            <Link href={'/'}>
              <a className={'logoWrapper'}>
                <Logo viewBox="0 0 247 54" />
              </a>
            </Link>

            <ul
              style={{
                display: `flex`,
                flexDirection: `row`,
                listStyle: `none`,
                padding: 0,
                marginLeft: `auto`
              }}>
              <li>aaaaaaaa</li>
              <li>bbbbbbbb</li>
            </ul>
          </ContentWrapper>
        </InnerWrapper>
      </Wrapper>
    </AreaProtector>
  );
};

export default TopBar;
