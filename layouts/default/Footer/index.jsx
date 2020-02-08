import React from 'react';
import clsx from 'clsx';
import {getYear} from 'date-fns';
import {Icon, InlineIcon} from '@iconify/react';
import home3Icon from '@iconify/icons-icomoon-free/home3';
import mailIcon from '@iconify/icons-ion/mail';
import globeAmericas from '@iconify/icons-fa-solid/globe-americas';

import styles from './styles.module.css';

const Footer = () => {
  return (
    <footer className={clsx('mt-auto py-2', styles.footer)}>
      <div className="container container-fluid px-2 lg:px-0">
        <div className="grid gap-4 grid-cols-1 mt-10 mb-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <div className="flex items-center">
              <div className="rounded-full overflow-hidden inline-block">
                <img
                  src="/images/men.jpg"
                  alt="team"
                  loading="lazy"
                  width="60"
                  height="60"
                  className="object-cover"
                />
              </div>
              <div className="ml-3">
                <h4 className="font-semibold">TÔI YÊU LẬP TRÌNH</h4>
                <div className="text-gray-500">Code, cafe, book</div>
              </div>
            </div>
            <ul className="mt-6">
              <li>
                <InlineIcon
                  icon={home3Icon}
                  width="17"
                  className="mr-2 text-fresh-red"
                />
                Phú Nhuận, Hồ Chí Minh
              </li>
              <li className="mt-2">
                <InlineIcon
                  icon={globeAmericas}
                  width="17"
                  className="mr-2 text-fresh-red"
                />
                <a
                  href="https://12bay.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:no-underline hover:text-fresh-red">
                  https://12bay.vn
                </a>
              </li>
              <li className="mt-2">
                <Icon
                  icon={mailIcon}
                  width="17"
                  className="mr-2 text-fresh-red"
                />
                <a
                  href="mailto:me@nghiepit.dev"
                  className="hover:no-underline hover:text-fresh-red">
                  me@nghiepit.dev
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.group_link}>
            <h4 className="underline-title">Liên kết trang</h4>
            <ul>
              <li>
                <a href="/">Tympanus Codrops</a>
              </li>
              <li>
                <a href="/">Kipalog Blog</a>
              </li>
              <li>
                <a href="/">SitePoint</a>
              </li>
              <li>
                <a href="/">Creative Bloq</a>
              </li>
              <li>
                <a href="/">Techtalk</a>
              </li>
            </ul>
          </div>
          <div className={styles.group_link}>
            <h4 className="underline-title">Liên kết của tôi</h4>
            <ul>
              <li>
                <a
                  href="https://12bay.vn"
                  target="_blank"
                  rel="noopener noreferrer">
                  Săn vé máy bay
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/nghiepit/botble-graphql-next"
                  target="_blank"
                  rel="noopener noreferrer">
                  Share source này
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.group_link}>
            <h4 className="underline-title">Khác</h4>
            <div className="mt-5">
              <a href="/" className="inline-block bg-fresh-red px-2">
                Code
              </a>
              <a href="/" className="inline-block ml-2 bg-fresh-red px-2">
                Cafe
              </a>
              <a href="/" className="inline-block ml-2 bg-fresh-red px-2">
                Book
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-gray-500">
          © {getYear(new Date())} ToiYeuLapTrinh. All right reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
