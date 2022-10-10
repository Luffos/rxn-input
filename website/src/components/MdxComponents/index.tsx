import type { Components } from '@mdx-js/react/lib';
import { Code, P, A } from './styled';

const MdxComponents: Components = {
  p: ({ children }) => <P>{children}</P>,
  code: ({ children }) => <Code>{children}</Code>,
  a: ({ children, href }) => <A href={href}>{children}</A>,
};

export default MdxComponents;
