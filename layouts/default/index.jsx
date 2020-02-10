import React from 'react';

import TopHead from './TopHead';
import Header from './Header';
import Footer from './Footer';

const Default = ({children}) => {
  return (
    <div className="flex flex-col min-h-screen">
      <TopHead />
      <Header />
      <main className="overflow-x-hidden">{children}</main>
      <Footer />
    </div>
  );
};

export default Default;
