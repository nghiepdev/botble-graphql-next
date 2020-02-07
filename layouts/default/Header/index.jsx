import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import {useToggle, useMedia} from 'react-use';

import Navigation from './Navigation';

const Header = () => {
  const [toggle, toggleOpen] = useToggle(false);
  const isMobile = useMedia('(max-width: 700px)');

  return (
    <header>
      <div className="container container-fluid px-2 lg:px-0">
        <div className="flex justify-between py-3 sm:py-6 select-none">
          <h1 className="text-3xl text-gray-700 font-semibold">
            <Link href="/">
              <a className="hover:no-underline">
                <span className="text-fresh-red">Tôi yêu</span> lập trình
              </a>
            </Link>
          </h1>
          <div className="flex items-center">
            {!isMobile && <Navigation />}
            <div className="flex ml-10 items-center">
              <span
                className="iconify font-bold"
                data-icon="ion:search"
                data-height="18"></span>
              {isMobile && (
                <span className="cursor-pointer ml-2" onClick={toggleOpen}>
                  <span
                    className={clsx('block -mr-2', {
                      hidden: !toggle,
                    })}>
                    <span
                      className="iconify font-semibold"
                      data-icon="ion:close-outline"
                      data-height="26"></span>
                  </span>
                  <span
                    className={clsx({
                      hidden: toggle,
                    })}>
                    <span
                      className="iconify font-bold"
                      data-icon="simple-line-icons:menu"
                      data-height="17"></span>
                  </span>
                </span>
              )}
            </div>
          </div>
        </div>
        {isMobile && toggle && <Navigation wide />}
      </div>
    </header>
  );
};

export default Header;
