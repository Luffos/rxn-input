import { memo } from 'react';

interface iProps {
  DocsData: object;
}

const DocsNavigator = ({ DocsData }: iProps) => {

  console.log(DocsData)

  return <></>;
};

export default memo(DocsNavigator);
