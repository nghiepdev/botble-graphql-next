import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Link from 'next/link';
import {format} from 'date-fns';
import {InlineIcon} from '@iconify/react';
import cubeSharpIcon from '@iconify/icons-ion/cube-sharp';
import clockIcon from '@iconify/icons-cil/clock';

import styles from './styles.module.css';

const ImageCard = ({
  title,
  href,
  as,
  image,
  category,
  createdAt,
  extraFooter,
  firstItem,
}) => {
  return (
    <Link href={href} as={as}>
      <a
        className={clsx(
          styles.card,
          'block overflow-hidden relative text-white',
          {
            first: firstItem,
          },
        )}>
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div
          className={clsx(
            styles.card_content,
            'w-full absolute transition duration-300 left-0 bottom-0 z-10 px-4 pt-12 pb-4',
          )}>
          <h4
            className={clsx(
              'font-semibold hover:text-fresh-red transition duration-300',
              {
                'uppercase text-lg': extraFooter,
              },
            )}>
            {title}
          </h4>
          {!!category && extraFooter && (
            <div className="mt-4">
              <Link href={category.href} as={category.as} passHref>
                <span className="inline-block bg-fresh-red px-3 hover:no-underline hover:bg-white hover:text-fresh-red">
                  <InlineIcon icon={cubeSharpIcon} />{' '}
                  <span className="uppercase text-xs font-medium">
                    {category.title}
                  </span>
                </span>
              </Link>
              <span className="inline-block ml-3">
                <InlineIcon icon={clockIcon} className="text-fresh-red" />{' '}
                <small className="uppercase font-medium ml-1">
                  {format('PP', new Date(createdAt))}
                </small>
              </span>
            </div>
          )}
        </div>
      </a>
    </Link>
  );
};

ImageCard.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  as: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  category: PropTypes.shape({
    title: PropTypes.string,
    href: PropTypes.string,
    as: PropTypes.string,
  }),
  createdAt: PropTypes.string,
  extraFooter: PropTypes.bool,
  firstItem: PropTypes.bool,
};

export default ImageCard;
