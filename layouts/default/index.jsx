import React from 'react';

import HeadTop from './HeadTop';

const Default = ({children}) => {
  return (
    <>
      <HeadTop />
      {children}
    </>
  );
};

export default Default;
