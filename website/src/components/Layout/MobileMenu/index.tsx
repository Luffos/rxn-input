import React, {memo, useState, useEffect} from 'react';
import {MobileMenuBackground, MobileMenuBox, MobileMenuWrapper} from './styles';
import CloseSVG from '../../../assets/close-icon.svg';
import Link from 'next/link';
import GitHubSVG from '../../../assets/github-icon.svg';
import { FadeIn } from 'react-animated-components';
//import iSelectedPage from '../../../interfaces/SelectedPage';

interface iProps {
  SelectedPage?: string;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({SelectedPage, setMobileMenuOpen}: iProps) => {
  return (
    <MobileMenuWrapper>
      <FadeIn durationMs={50}>
        <MobileMenuBackground onClick={() => setMobileMenuOpen(false)} />
      </FadeIn>
      <MobileMenuBox>
        <div onClick={() => setMobileMenuOpen(false)} className="closeWrapper">
          <CloseSVG />
        </div>
        <ul>
          <li>
            <Link data-currentpage={SelectedPage === 'DOCS'} href={`/docs`}>
              <a><p>Documentation</p></a>
            </Link>
          </li>
          <li>
            <Link data-currentpage={SelectedPage === 'EXAMPLES'} href={`/examples`}>
              <a><p>Examples</p></a>
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