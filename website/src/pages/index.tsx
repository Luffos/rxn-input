import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout, {LayoutContent} from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <LayoutContent>
        <h1 style={{margin: 0, padding: 0}}>Home</h1>
      </LayoutContent>
    </Layout>
  );
};

export default Home;
