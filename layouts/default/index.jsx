import React from 'react';

import TopHead from './TopHead';
import Header from './Header';

const Default = ({children}) => {
  return (
    <>
      <TopHead />
      <Header />
      {children}
    </>
  );
};

export default Default;
