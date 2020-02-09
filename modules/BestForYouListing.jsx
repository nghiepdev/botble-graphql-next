import React from 'react';
import Link from 'next/link';
import gql from 'graphql-tag';
import {useQuery} from 'urql';
import {useMedia} from 'react-use';
import {format} from 'date-fns';

import LoaderIcon from 'components/LoaderIcon';
import Alert from 'components/Alert';
import VerticalPost from 'components/VerticalPost';

const queryNewest = gql`
  query newestListing($limit: Int) {
    newestListing(limit: $limit) {
      id
      name
      slug
      image
      description
      createdAt
    }
  }
`;

const BestForYouListing = () => {
  const isWide = useMedia('(min-width: 640px)', true);

  const [{error, fetching, data}] = useQuery({
    query: queryNewest,
    variables: {limit: isWide ? 6 : 10},
    requestPolicy: 'cache-and-network',
  });

  if (error) {
    return (
      <div className="flex-grow">
        <Alert content={error.message} />
      </div>
    );
  }

  if (fetching) {
    return (
      <div className="h-40 sm:56 md:64 flex justify-center items-center flex-grow">
        <LoaderIcon />
      </div>
    );
  }

  return (
    <section className="flex-grow">
      <h3 className="underline-title underline-title-xl text-xl text-gray-700">
        Dành cho bạn
      </h3>
      <div className="grid row-gap-3 col-gap-6 sm:grid-cols-2">
        {data.newestListing.map((post, index) =>
          isWide && index < 2 ? (
            <VerticalPost
              key={index}
              {...post}
              className="row-span-6 mb-3 pb-3 sm:mb-0 sm:pb-0 border-b sm:border-0"
            />
          ) : (
            <Link key={post.id} href="/n/[slug]" as={`/n/${post.slug}`}>
              <a className="flex hover:no-underline transition duration-300">
                <img
                  src={post.image}
                  alt={post.name}
                  loading="lazy"
                  className="w-16 h-16 object-cover object-center mr-2 flex-shirk-0"
                />
                <div>
                  <h4 className="ellipsis font-semibold hover:text-fresh-red transition duration-300">
                    {post.name}
                  </h4>
                  <time className="font-medium text-gray-700 text-xs">
                    {format('PP', new Date(post.createdAt))}
                  </time>
                </div>
              </a>
            </Link>
          ),
        )}
      </div>
    </section>
  );
};

export default BestForYouListing;
