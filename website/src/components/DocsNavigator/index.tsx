/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { memo } from 'react';
import Colors from '../../styles/theme/Colors';

interface iProps {
  DocsData: object;
}

const DocsNavigator = ({ DocsData }: iProps) => {
  return (
    <div style={{ width: `100%`, height: `98%`, overflowY:'scroll'}}>
      {(() => {
        const d: Array<JSX.Element> = [];
        Object.keys(DocsData).forEach((version) => {
          if (version == 'v1.0.0') return;

          Object.keys((DocsData as any)[version]).map((folder, index) => {
            d.push(
              <ul key={`${version}-${folder}`} style={{ margin: 0, padding: 0, marginBottom: `2rem`, listStyle: 'none' }}>
                <p style={{ marginLeft: '0.5rem', marginTop:'0.75rem', fontSize: '1.2rem', fontWeight: 800 }}>{folder}</p>

                {Object.keys((DocsData as any)[version][folder]).map((docName, index) => {
                  return (
                    <li key={`${version}-${folder}-${docName}`}>
                      <p style={{ margin: 0, marginLeft: '0.5rem', fontSize: '0.95rem', color: Colors.BLUEBLOUSE }}>{docName}</p>
                    </li>
                  );
                })}
              </ul>
            );
          });
        });
        return d;
      })()}
    </div>
  );
};

export default memo(DocsNavigator);
