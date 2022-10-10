import type { Components } from '@mdx-js/react/lib';
import { Code } from './styled';

const MdxComponents: Components = {
  code: ({ children }) => <Code>{children}</Code>,
};

export default MdxComponents;
