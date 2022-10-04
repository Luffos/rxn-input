import Link from 'next/link';
import React, { memo, useState } from 'react';
import LogoSVG from '../../../assets/Logo.svg';
import GitHubSVG from '../../../assets/github-icon.svg';
import KebabSVG from '../../../assets/kebab-icon.svg';
import { ContentWrapper, InnerWrapper, MobileKebab, RItems, Wrapper } from './styles';
import useMediaQuery from '../../../hooks/useMediaQuery';
import BreakPoints from '../../../styles/theme/BreakPoints';
import useEffectOnce from '../../../hooks/useEffectOnce';
import iSelectedPage from '../../../interfaces/SelectedPage';
import useScrollPosition from '../../../hooks/useScrollPosition';

interface iProps {
  SelectedPage?: iSelectedPage;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TopBar = ({ SelectedPage, setMobileMenuOpen }: iProps) => {
  const [canShowKebab, setCanShowKebab] = useState(false);
  const showKebab = useMediaQuery(BreakPoints.down('md'));
  const scrollPosition = useScrollPosition();

  useEffectOnce(() => {
    setCanShowKebab(true);
  });

  return (
    <Wrapper data-scrolled={scrollPosition < 20 ? undefined : true}>
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
                <a data-currentpage={SelectedPage === 'DOCS'}>
                  <p>DOCUMENTATION</p>
                </a>
              </Link>
            </li>
            <li>
              <Link href={`/examples`}>
                <a data-currentpage={SelectedPage === 'EXAMPLES'}>
                  <p>EXAMPLES</p>
                </a>
              </Link>
            </li>
            <li>
              <a className="gitHubWrapper" href="https://github.com/Luffos/rxn-input">
                <GitHubSVG />
              </a>
            </li>
          </RItems>

          {canShowKebab && showKebab && (
            <MobileKebab onClick={() => setMobileMenuOpen(true)}>
              <KebabSVG />
            </MobileKebab>
          )}
        </ContentWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

export default memo(TopBar);
