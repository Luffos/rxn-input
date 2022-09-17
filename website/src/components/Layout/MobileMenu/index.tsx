import React, {memo, useEffect} from 'react';
import {MobileMenuBackground, MobileMenuBox, MobileMenuWrapper} from './styled';
import CloseSVG from '../../../assets/close-icon.svg';
import {FadeIn, SlideInRight, SlideInLeft, SlideInUp} from 'react-animated-components';
import {Link} from 'gatsby';
import GitHubSVG from '../../../assets/github-icon.svg';
import iSelectedPage from '../../../interfaces/SelectedPage';

interface iProps {
  SelectedPage?: iSelectedPage;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({SelectedPage, setMobileMenuOpen}: iProps) => {
  return (
    <MobileMenuWrapper>
      <FadeIn durationMs={100}>
        <MobileMenuBackground onClick={() => setMobileMenuOpen(false)} />
      </FadeIn>
      <MobileMenuBox>
        <div onClick={() => setMobileMenuOpen(false)} className="closeWrapper">
          <CloseSVG />
        </div>
        <ul>
          <li>
            <Link data-currentpage={SelectedPage === 'DOCS'} to={`/docs`}>
              <p>Documentation</p>
            </Link>
          </li>
          <li>
            <Link data-currentpage={SelectedPage === 'EXAMPLES'} to={`/examples`}>
              <p>Examples</p>
            </Link>
          </li>
          <li>
            <a className="github" href="https://github.com/Luffos/rxn-input">
              <p>GitHub</p>
              <GitHubSVG />
            </a>
          </li>
        </ul>
      </MobileMenuBox>
    </MobileMenuWrapper>
  );
};

export default memo(MobileMenu);
