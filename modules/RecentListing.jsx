import React from 'react';
import Link from 'next/link';
import gql from 'graphql-tag';
import {useQuery} from 'urql';

import LoaderIcon from 'components/LoaderIcon';

const queryRecent = gql`
  query recentListing($limit: Int) {
    recentListing(limit: $limit) {
      id
      name
      slug
      image
    }
  }
`;

const RecentListing = () => {
  const [{error, fetching, data}] = useQuery({
    query: queryRecent,
    variables: {limit: 6},
    requestPolicy: 'cache-and-network',
  });

  if (error) {
    return null;
  }

  if (fetching) {
    return (
      <div className="w-64 h-40 flex justify-center items-center">
        <LoaderIcon />
      </div>
    );
  }

  return (
    <section className="w-64 border border-gray-300 rounded-sm">
      <h3 className="text-xl bg-gray-200 p-2 font-semibold">Tin đã xem</h3>
      <ul className="p-3 pb-0">
        {data.recentListing.map(post => (
          <li key={post.id} className="mb-4">
            <Link href="/n/[slug]" as={`/n/${post.slug}`}>
              <a className="flex hover:no-underline hover:text-fresh-red transition duration-300">
                <img
                  src={post.image}
                  alt={post.name}
                  loading="lazy"
                  className="w-16 h-16 object-cover object-center mr-2 flex-shirk-0"
                />
                <h4 className="ellipsis">{post.name}</h4>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default RecentListing;
