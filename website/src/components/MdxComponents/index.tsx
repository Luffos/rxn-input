import type { Components } from '@mdx-js/react/lib';
import { Code, P, A, H1 } from './styled';

const MdxComponents: Components = {
  h1: ({ children }) => <H1>{children}</H1>,
  p: ({ children }) => <P>{children}</P>,
  code: ({ children }) => <Code>{children}</Code>,
  a: ({ children, href }) => <A href={href}>{children}</A>,
};

export default MdxComponents;
