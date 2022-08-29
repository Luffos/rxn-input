import * as React from 'react';
import type {HeadFC} from 'gatsby';
import useUnits from 'rxn-units';
import Layout from '../components/Layout';
import {useWindowDimensions} from 'react-native';

const IndexPage = () => {
  const {width, height} = useWindowDimensions();
  const {vmin, vh} = useUnits();

  return (
    <>
      <Layout>
        <div style={{ width: '100%', height: vh(100)}}>

          <div style={{position: `absolute`, width: '100%', marginTop: vmin(10)}}>
            <div style={{marginLeft: vmin(20), marginRight: vmin(20), fontSize: vmin(3)}}>
              <h1 style={{color: `white`, whiteSpace: 'nowrap'}}>
                Input Handler for <br /> React and React Native
              </h1>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>RXNInput - Cross Platform Input Handler for React and React Native.</title>;
