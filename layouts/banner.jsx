import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Link from 'next/link';

import styles from './styles.module.css';
import Default from './default';

const Banner = ({children, title, breadcrumb, intro2}) => {
  return (
    <Default>
      <section
        className={clsx(
          styles.banner_intro,
          'h-40 sm:60 px-3 py-0 sm:py-40 relative text-white',
          {
            intro2,
          },
        )}>
        <article className="h-full flex flex-col justify-center items-center">
          <h1 className="text-center font-bold text-lg sm:text-3xl">{title}</h1>
          {breadcrumb && (
            <div
              className={clsx(
                styles.breadcrumb,
                'flex flex-wrap justify-center mt-2',
              )}>
              <Link href="/">
                <a className="flex-shrink-0">Trang chủ</a>
              </Link>
              {breadcrumb.map(({title, href, as}, index) => (
                <div key={index}>
                  <span className="px-2">&#47;</span>
                  {href ? (
                    <Link href={href} as={as}>
                      <a>{title}</a>
                    </Link>
                  ) : (
                    <span>{title}</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </article>
      </section>
      {children}
    </Default>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  breadcrumb: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      href: PropTypes.string,
      as: PropTypes.string,
    }),
  ),
  intro2: PropTypes.bool,
};

export default Banner;
