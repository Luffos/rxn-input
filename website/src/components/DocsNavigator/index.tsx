/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo, useCallback } from 'react';
import Colors from '../../styles/theme/Colors';
import { MainUl } from './styled';
import Link from 'next/link';

import DocsData from '../../content/docs/data.json';
import { Router, useRouter } from 'next/router';

const DocsNavigator = () => {
  const router = useRouter();

  const getSlugLink = (slugs: Array<string>) => {
    // Remove /vx.x.x/ from url
    return slugs
      .slice(-1)[0]
      .split('docs/')
      .pop()
      ?.replace(/v(\d+\.)?(\d+\.)?(\*|\d+)\//g, '');
  };

  const isCurrentDoc = useCallback(
    (slugs: Array<string>) => {
      return slugs.find((i: any) => i.split('docs/').pop().split('/docs').pop() == router.asPath?.split('docs/').pop()?.split('/docs').pop()) ? true : false;
    },
    [router]
  );

  return (
    <div style={{ width: `100%`, height: `98%`, overflowY: 'scroll' }}>
      {(() => {
        const d: Array<JSX.Element> = [];
        Object.keys(DocsData).forEach((version) => {
          if (version != 'v1.0.0') return;

          Object.keys((DocsData as any)[version]).map((folder, index) => {
            d.push(
              <MainUl key={`${version}-${folder}`}>
                <p
                  onClick={(e) => {
                    e.currentTarget.parentElement?.toggleAttribute('data-navclosed');
                  }}
                >
                  {folder}
                </p>

                {Object.keys((DocsData as any)[version][folder]).map((docName, index) => {
                  return (
                    <li key={`${version}-${folder}-${docName}`}>
                      <Link href={getSlugLink((DocsData as any)[version][folder][docName].slugs) || '#'}>
                        <a data-current-doc={isCurrentDoc((DocsData as any)[version][folder][docName].slugs)}>{docName}</a>
                      </Link>
                    </li>
                  );
                })}
              </MainUl>
            );
          });
        });
        return d;
      })()}
    </div>
  );
};

export default memo(DocsNavigator);
