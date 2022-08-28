import * as React from 'react';
import type {HeadFC} from 'gatsby';
import useUnits, {vmin} from 'rxn-units';
import Layout from '../components/Layout';

const IndexPage = () => {
  const {vmin} = useUnits();

  return (
    <>
      <Layout>
        <div style={{width: '100%', height: 1400, backgroundColor: '#0d164f'}}>
          <svg width="200%" viewBox="0 0 1440 500" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gradient" x1="99%" y1="60%" x2="1%" y2="40%">
                <stop offset="20%" stopColor="#000f49"></stop>
                <stop offset="90%" stopColor="#5d4deb"></stop>
              </linearGradient>
            </defs>
            <path
              d="M 0,500 C 0,500 0,250 0,250 C 136.66666666666669,298.93333333333334 273.33333333333337,347.8666666666667 419,334 C 564.6666666666666,320.1333333333333 719.3333333333333,243.46666666666667 891,219 C 1062.6666666666667,194.53333333333333 1251.3333333333335,222.26666666666665 1440,250 C 2440,250 1440,500 1440,500 Z"
              stroke="none"
              strokeWidth="0"
              fill="url(#gradient)"
              fillOpacity="1"
              transform="rotate(-180 720 250)"></path>
          </svg>
        </div>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>RXNInput - Cross Platform Input Handler for React and React Native.</title>;
