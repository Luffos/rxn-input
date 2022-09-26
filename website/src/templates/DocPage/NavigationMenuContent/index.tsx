import React, {memo, useEffect} from 'react';
import {Link, useScrollRestoration} from 'gatsby';
import docsData from '../../../../public/docs/data.json';
import {Ul, Li, Wrapper} from './styled';

const transformString = (s: string) => s.split(' ').join('-').toLowerCase().replace(/\/+$/, '');

const NavigationMenuContent = () => {
  useEffect(() => {
    setTimeout(() => {
      document.querySelector(`[data-current-doc='true']`)?.scrollIntoView({behavior: 'auto', block: 'center'});
    }, 1);
  }, []);

  return (
    <Wrapper>
      {Object.keys(docsData['v2.0.0']).map(group => {
        return (
          <Ul id={`docs-${transformString(group)}`} key={`docs-${transformString(group)}`}>
            <h3>{group}</h3>

            {
              //@ts-ignore
              docsData['v2.0.0'][group].map((item, i) => {
                return (
                  <Li data-current-doc={window.location.pathname.replace(/\/+$/, '') == `/docs/${transformString(group)}/${transformString(item?.frontmatter?.title || `?`)}` ? true : undefined} key={`docs--${transformString(item?.frontmatter?.title || `?`)}_${i}`}>
                    <Link to={`/docs/${transformString(group)}/${transformString(item?.frontmatter?.title || `?`)}`}>{<p>{item?.frontmatter?.title || `?`}</p>}</Link>
                  </Li>
                );
              })
            }
          </Ul>
        );
      })}
    </Wrapper>
  );
};

export default memo(NavigationMenuContent);
