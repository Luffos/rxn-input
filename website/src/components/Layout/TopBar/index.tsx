import React, {memo} from 'react';
import {Link} from 'gatsby';
import useMediaQuery from '../../../hooks/useMediaQuery';
import BreakPoints from '../../../styles/BreakPoints';
import {LeftItems, MobileKebab, RightItems, TopBarBase, TopBarWrapper, TopBarContent} from './styled';
import Logo from '../../../assets/Logo.svg';
import GitHubSVG from '../../../assets/github-icon.svg';
import KebabSVG from '../../../assets/kebab-icon.svg';
import iSelectedPage from '../../../interfaces/SelectedPage';
import MediaQueries from '../../../styles/MediaQueries';

interface iProps {
  SelectedPage?: iSelectedPage;
  setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  MobileExtraTopBar?: JSX.Element;
}

const TopBar = ({SelectedPage, setMobileMenuOpen, MobileExtraTopBar}: iProps) => {
  const isDesktop = useMediaQuery(MediaQueries.isDesktop);

  return (
    <TopBarWrapper>
      <TopBarBase>
        <TopBarContent style={{paddingTop: '1rem', paddingBottom: '1rem'}}>
          <LeftItems>
            <Link className={'logoWrapper'} to={'/'}>
              <Logo />
            </Link>
          </LeftItems>

          <RightItems>
            {isDesktop && (
              <ul>
                <li>
                  <Link data-currentpage={SelectedPage === 'DOCS'} to={`/docs`}>
                    <p>DOCUMENTATION</p>
                  </Link>
                </li>
                <li>
                  <Link data-currentpage={SelectedPage === 'EXAMPLES'} to={`/examples`}>
                    <p>EXAMPLES</p>
                  </Link>
                </li>
                <li>
                  <a className="gitHub" href="https://github.com/Luffos/rxn-input">
                    <GitHubSVG />
                  </a>
                </li>
              </ul>
            )}

            {!isDesktop && (
              <MobileKebab onClick={() => setMobileMenuOpen(true)}>
                <KebabSVG height={22} />
              </MobileKebab>
            )}
          </RightItems>
        </TopBarContent>
      </TopBarBase>

      {/* {MobileExtraTopBar && !isDesktop && (
        <TopBarBase>
          <TopBarContent style={{paddingTop: 0, paddingBottom: 0}}>{MobileExtraTopBar}</TopBarContent>
        </TopBarBase>
      )} */}
    </TopBarWrapper>
  );
};

export default memo(TopBar);
