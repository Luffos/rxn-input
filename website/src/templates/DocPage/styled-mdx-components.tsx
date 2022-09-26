import React from 'react';
import styled from 'styled-components';

export const _MDXComponents: import('mdx/types').MDXComponents = {
  p: ({children}) => <_P>{children}</_P>,
  h1: ({children}) => <_H1>{children}</_H1>,
  a: ({children, href}) => (
    <a style={{color: `#1cb0fa`}} href={href}>
      {children}
    </a>
  ),
  code: ({children}) => <_Code>{children}</_Code>,
  diff: ({children}) => <_Code>{children}</_Code>
};

const _P = styled.p`
  margin-bottom: 2rem;
  font-size: 1.2rem;
  color: rgba(148, 163, 184, 1);
`;

const _H1 = styled.h1`
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  color: white;
`;

const _Code = styled.p`
  width: fit-content;
  min-width: 20rem;
  background: rgba(5, 2, 24, 0.185);
  padding: 1rem;
  border-radius: 0.4rem;
  backdrop-filter: blur(0.7rem);
  font-size: 1rem;
`;
