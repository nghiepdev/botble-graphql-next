import React from 'react';

import TopHead from './TopHead';

const Default = ({children}) => {
  return (
    <>
      <TopHead />
      {children}
    </>
  );
};

export default Default;
