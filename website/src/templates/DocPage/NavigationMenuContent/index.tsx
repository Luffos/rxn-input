import React, {memo} from 'react';
import {Link} from 'gatsby';
import docsData from '../../../../public/docs/data.json';
import {Ul, Li} from './styled';

const transformString = (s: string) => s.split(' ').join('-').toLowerCase();

const NavigationMenuContent = () => {
  return (
    <>
      {Object.keys(docsData['v2.0.0']).map(group => {
        return (
          <Ul id={`docs-${transformString(group)}`} key={`docs-${transformString(group)}`}>
            <h3>{group}</h3>

            {
              //@ts-ignore
              docsData['v2.0.0'][group].map((f, i) => {
                return (
                  <Li key={`docs--${transformString(f?.frontmatter?.title || `?`)}_${i}`}>
                    <Link to={'#'}>{<p>{f?.frontmatter?.title || `?`}</p>}</Link>
                  </Li>
                );
              })
            }
          </Ul>
        );
      })}
    </>
  );
};

export default memo(NavigationMenuContent);
