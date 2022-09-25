import React, {memo} from 'react';
import {Link} from 'gatsby';
import docsData from '../../../public/docs/data.json';

const NavigationMenuContent = () => {
  return (
    <>
      {Object.keys(docsData['v2.0.0']).map(group => {
        return (
          <ul style={{listStyle: `none`, padding: 0, margin: 0}}>
            <h3>{group}</h3>

            {
              //@ts-ignore
              docsData['v2.0.0'][group].map((f: any) => {
                return (
                  <li >
                    <Link style={{color: `#94A3B8`}} to={"#"}>{f?.frontmatter?.title || `test`}</Link>
                  </li>
                );
              })
            }
          </ul>
        );
      })}
    </>
  );
};

export default memo(NavigationMenuContent);
