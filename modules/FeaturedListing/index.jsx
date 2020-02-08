import React from 'react';
import gql from 'graphql-tag';
import {useQuery} from 'urql';

import styles from './styles.module.css';
import Alert from 'components/Alert';
import LoaderIcon from 'components/LoaderIcon';
import ImageCard from 'components/ImageCard';

const queryFeatured = gql`
  query featuredListing($limit: Int) {
    featuredListing(limit: $limit) {
      id
      name
      slug
      image
      categories {
        name
        slug
      }
      createdAt
    }
  }
`;

const FeaturedListing = () => {
  const [{error, fetching, data}] = useQuery({
    query: queryFeatured,
    variables: {limit: 5},
    requestPolicy: 'cache-and-network',
  });

  if (error) {
    return <Alert content={error.message} />;
  }

  if (fetching) {
    return (
      <div className="h-40 sm:h-56 md:h-64 flex justify-center items-center">
        <LoaderIcon />
      </div>
    );
  }

  return (
    <section className={styles.grid_layout}>
      {data.featuredListing.map((post, index) => (
        <ImageCard
          key={post.id}
          title={post.name}
          href="/n/[slug]"
          as={`/n/${post.slug}`}
          image={post.image}
          category={
            index === 0 && post.categories[0]
              ? {
                  title: post.categories[0].name,
                  href: '/c/[slug]',
                  as: `/c/${post.categories[0].slug}`,
                }
              : undefined
          }
          createdAt={post.createdAt}
          extraFooter={index === 0}
          firstItem={index === 0}
        />
      ))}
    </section>
  );
};

export default FeaturedListing;
