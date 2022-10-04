import type { NextPage } from 'next';
import Layout, { LayoutContent } from '../components/Layout';
import { Title, SubTitle, DevicesWrapper, Section1, GetStartedButton } from '../styles/pages/index.styles';
import DeviceSVG from '../assets/Devices.svg';
import Head from 'next/head';
import useMediaQuery from '../hooks/useMediaQuery';
import BreakPoints from '../styles/theme/BreakPoints';
import Link from 'next/link';

const Home: NextPage = () => {
  const downLg = useMediaQuery(BreakPoints.down('lg'));

  return (
    <>
      <Head>
        <title>RXN Input - Cross Platform Input Handler for React and React Native.</title>
      </Head>

      <Layout>
        <LayoutContent style={{ marginTop: `9rem` }}>
          <Section1>
            <div>
              <Title>
                Cross-Platform Input Handler
                <br />
                for React and React Native
              </Title>
              <SubTitle>
                Mouse<span>,</span> Touches<span>,</span> Keyboard <span>and</span> Gamepad
              </SubTitle>
              {!downLg && (
                <Link href={'/docs/getting-started/installation'}>
                  <a style={{ display: downLg ? 'none' : 'flex', width: 'fit-content' }}>
                    <GetStartedButton>Get started</GetStartedButton>
                  </a>
                </Link>
              )}
            </div>
            <DevicesWrapper>
              <DeviceSVG viewBox="0 0 469 298" />
            </DevicesWrapper>
            {downLg && (
              <Link href={'/docs/getting-started/installation'}>
                <a style={{ display: !downLg ? 'none' : 'flex', width: 'fit-content', margin: '0 auto' }}>
                  <GetStartedButton>Get started</GetStartedButton>
                </a>
              </Link>
            )}
          </Section1>
        </LayoutContent>
      </Layout>
    </>
  );
};

export default Home;
