import React from 'react';
import Link from 'next/link';

import Navigation from './Navigation';

const Header = () => {
  return (
    <header>
      <div className="container container-fluid px-2 lg:px-0">
        <div className="flex justify-between py-6">
          <h1 className="text-3xl text-gray-700 font-semibold">
            <Link href="/">
              <a className="hover:no-underline">
                <span className="text-fresh-red">Tôi yêu</span> lập trình
              </a>
            </Link>
          </h1>
          <div className="flex items-center">
            <Navigation />
            <div className="ml-10">
              <span
                className="iconify font-bold"
                data-icon="ion:search"
                data-height="18"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
