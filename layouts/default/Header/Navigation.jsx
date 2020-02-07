import React from 'react';

import ActiveLink from 'components/ActiveLink';

const Navigation = () => {
  return (
    <nav>
      <ul className="flex font-medium">
        <li>
          <ActiveLink href="/">
            <a>Trang chủ</a>
          </ActiveLink>
        </li>
        <li className="ml-6">
          <a
            href="//codecanyon.net/item/botble-cms-php-platform-based-on-laravel-framework/16928182?ref=nghiepit"
            target="_blank"
            rel="noopener noreferrer">
            Mua ngay
          </a>
        </li>
        <li className="ml-6">
          <ActiveLink href="/c/[slug]" as="/c/the-gioi" exact>
            <a>Thế giới</a>
          </ActiveLink>
        </li>
        <li className="ml-6">
          <ActiveLink href="/c/[slug]" as="/c/van-hoa" exact>
            <a>Văn hóa</a>
          </ActiveLink>
        </li>
        <li className="ml-6">
          <ActiveLink href="/c/[slug]" as="/c/xa-hoi" exact>
            <a>Xã hội</a>
          </ActiveLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
