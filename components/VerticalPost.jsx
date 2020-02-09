import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Link from 'next/link';
import {format} from 'date-fns';

const VerticalPost = ({
  name,
  slug,
  image,
  description,
  createdAt,
  className,
  more,
}) => {
  return (
    <Link href="/p/[slug]" as={`/p/${slug}`}>
      <a className={clsx(className, 'hover:no-underline')}>
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="object-cover object-center"
        />
        <time
          className="inline-flex flex-col items-center text-white bg-fresh-red px-4 py-1 font-semibold uppercase -my-3"
          style={{transform: 'translate(40px, -25px)'}}>
          <small> {format('LLL', new Date(createdAt))}</small>
          <span className="font-bold text-xl -my-1">
            {format('dd', new Date(createdAt))}
          </span>
          <span> {format('yyyy', new Date(createdAt))}</span>
        </time>
        <h4 className="font-semibold text-xl text-gray-700 hover:text-fresh-red transition duration-300">
          {name}
        </h4>
        <div className="text-gray-600 cursor-default ellipsis line-3 mt-3">
          {description}
        </div>
        {more && (
          <div className="uppercase text-sm text-fresh-red font-medium tracking-tighter mt-5 cursor-default">
            <span className="hover:underline cursor-pointer">Xem thêm</span>
          </div>
        )}
      </a>
    </Link>
  );
};

VerticalPost.propTypes = {
  more: PropTypes.bool,
};

export default VerticalPost;
