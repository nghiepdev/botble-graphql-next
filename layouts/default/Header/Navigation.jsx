import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import ActiveLink from 'components/ActiveLink';

const Navigation = ({wide}) => {
  return (
    <nav
      className={clsx({
        '-mx-3 border-t-2 border-red-500': wide,
      })}>
      <ul
        className={clsx('flex font-medium', {
          'flex-col': wide,
        })}>
        <li
          className={clsx({
            'p-3 border-b border-gray-500 border-dashed': wide,
          })}>
          <ActiveLink href="/">
            <a className="block hover:no-underline hover:text-blue-600">
              Trang chủ
            </a>
          </ActiveLink>
        </li>
        <li
          className={clsx({
            'p-3 border-b border-gray-500 border-dashed': wide,
            'ml-6': !wide,
          })}>
          <a
            href="//codecanyon.net/item/botble-cms-php-platform-based-on-laravel-framework/16928182?ref=nghiepit"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:no-underline hover:text-blue-600">
            Mua ngay
          </a>
        </li>
        <li
          className={clsx({
            'p-3 border-b border-gray-500 border-dashed': wide,
            'ml-6': !wide,
          })}>
          <ActiveLink href="/c/[slug]" as="/c/the-gioi" exact>
            <a className="block hover:no-underline hover:text-blue-600">
              Thế giới
            </a>
          </ActiveLink>
        </li>
        <li
          className={clsx({
            'p-3 border-b border-gray-500 border-dashed': wide,
            'ml-6': !wide,
          })}>
          <ActiveLink href="/c/[slug]" as="/c/van-hoa" exact>
            <a className="block hover:no-underline hover:text-blue-600">
              Văn hóa
            </a>
          </ActiveLink>
        </li>
        <li
          className={clsx({
            'p-3 border-b border-gray-400 border-solid': wide,
            'ml-6': !wide,
          })}>
          <ActiveLink href="/c/[slug]" as="/c/xa-hoi" exact>
            <a className="block hover:no-underline hover:text-blue-600">
              Xã hội
            </a>
          </ActiveLink>
        </li>
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  wide: PropTypes.bool,
};

export default Navigation;
