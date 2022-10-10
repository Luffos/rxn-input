/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-key */
import type { Components } from '@mdx-js/react/lib';
import { P, A, H1, Code } from './styled';
import Link from 'next/link';

import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';
import React from 'react';

const resolveHref = (href: string) => {
  return href;
};

const MdxComponents: Components = {
  h1: ({ children }) => <H1>{children}</H1>,
  p: ({ children }) => <P>{children}</P>,
  code: ({ children, className }) => (
    <Highlight {...defaultProps} theme={theme} code={String(children).trim()} language={className?.split('language-').pop() || ('' as any)}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Code className={className} style={style}>
          {tokens.map((line, i) => (
            <div key={`${line}_${i}`} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => {
                if (token.empty || token.content == '') {
                  return <React.Fragment key={key}>&#32;</React.Fragment>;
                }
                return <span {...getTokenProps({ token, key })} />;
              })}
            </div>
          ))}
        </Code>
      )}
    </Highlight>
  ),
  a: ({ children, href }) => (
    <Link href={resolveHref(String(href))}>
      <A href={resolveHref(String(href))}>{children}</A>
    </Link>
  ),
};

export default MdxComponents;
