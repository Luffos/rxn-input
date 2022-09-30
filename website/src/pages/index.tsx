import type {NextPage} from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Layout, {LayoutContent} from '../components/Layout';
import Colors from '../styles/theme/Colors';
import {Title, SubTitle} from './index.styles';

const Home: NextPage = () => {
  return (
    <Layout>
      <LayoutContent style={{marginTop: `8rem`}}>
        <>
          <Title>
            Cross-Platform Input Handler
            <br />
            for React and React Native.
          </Title>
          <SubTitle>
            Mouse<span>,</span> Touches<span>,</span> Keyboard <span>and</span>{' '}
            Gamepad
          </SubTitle>
        </>
      </LayoutContent>
    </Layout>
  );
};

export default Home;
