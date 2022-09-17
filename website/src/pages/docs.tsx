import React from 'react';
import type {HeadFC} from 'gatsby';
import Layout from '../components/Layout';
import DocPage from '../templates/DocPage';

const DocsPage = () => <DocPage />

export default DocsPage;

export const Head: HeadFC = () => <title>RXN Input - Documentation</title>;
