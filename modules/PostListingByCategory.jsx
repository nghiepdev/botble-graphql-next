import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Link from 'next/link';
import gql from 'graphql-tag';
import {useQuery} from 'urql';
import {format} from 'date-fns';
import {InlineIcon} from '@iconify/react';
import clockIcon from '@iconify/icons-cil/clock';

import Alert from 'components/Alert';
import LoaderIcon from 'components/LoaderIcon';

const queryPosts = gql`
  query postsByCategoryId($id: Int!) {
    postsByCategoryId(id: $id) {
      id
      name
      slug
      image
      description
      createdAt
    }
  }
`;

const PostListingByCategory = ({id}) => {
  const [{error, fetching, data}] = useQuery({
    query: queryPosts,
    variables: {
      id,
    },
    requestPolicy: 'cache-and-network',
  });

  if (error) {
    return <Alert content={error.message} />;
  }

  if (fetching) {
    return (
      <div className="h-40 sm:64 flex justify-center items-center">
        <LoaderIcon />
      </div>
    );
  }

  if (!data.postsByCategoryId.length) {
    return (
      <Alert
        title="Thông báo"
        content="Chưa có tin tức nào trong danh mục này"
      />
    );
  }

  return (
    <section>
      {data.postsByCategoryId.map((post, index) => (
        <Link key={post.id} href="/p/[slug]" as={`/p/${post.slug}`}>
          <a
            className={clsx(
              'flex flex-col sm:flex-row items-stretch bg-white hover:no-underline',
              {
                'mt-10': index !== 0,
              },
            )}>
            <div className="w-full sm:w-64 flex-shrink-0">
              <img
                src={post.image}
                alt={post.name}
                loading="lazy"
                className="image-thumb object-cover object-center w-full h-full"
              />
            </div>
            <div className="p-5">
              <h4 className="font-semibold hover:text-fresh-red transition duration-300 uppercase text-lg text-gray-800">
                {post.name}
              </h4>
              <time className="inline-block py-2">
                <InlineIcon icon={clockIcon} className="text-fresh-red" />{' '}
                <small className="uppercase font-medium ml-1">
                  {format('PP', new Date(post.createdAt))}
                </small>
              </time>
              <div
                dangerouslySetInnerHTML={{__html: post.description}}
                className="text-gray-700 text-lg ellipsis line-3"
              />
            </div>
          </a>
        </Link>
      ))}
    </section>
  );
};

PostListingByCategory.propTypes = {
  id: PropTypes.number.isRequired,
};

export default PostListingByCategory;
