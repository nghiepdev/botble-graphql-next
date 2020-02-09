import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {useToggle, useMedia, useUpdateEffect} from 'react-use';
import {Icon} from '@iconify/react';
import iconSearchIcon from '@iconify/icons-ion/search';
import closeBig from '@iconify/icons-vaadin/close-big';
import menuIcon from '@iconify/icons-simple-line-icons/menu';

import Navigation from './Navigation';

const Header = () => {
  const router = useRouter();

  const [toggle, toggleOpen] = useToggle(false);
  const isMobile = useMedia('(max-width: 700px)');

  useUpdateEffect(() => {
    if (isMobile) {
      toggleOpen(false);
    }
  }, [isMobile, router.asPath]);

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
              <Icon icon={iconSearchIcon} className="font-bold" height="18" />
              {isMobile && (
                <Icon
                  icon={toggle ? closeBig : menuIcon}
                  className="cursor-pointer ml-2 font-bold"
                  width="18"
                  height="16"
                  onClick={toggleOpen}
                />
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
