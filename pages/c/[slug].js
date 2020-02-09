import React from 'react';
import {useRouter} from 'next/router';
import gql from 'graphql-tag';
import {useQuery} from 'urql';
import {useMedia} from 'react-use';

import Layout from 'layouts/banner';
import Head from 'components/Head';
import Alert from 'components/Alert';
import LoaderIcon from 'components/LoaderIcon';
import Sidebar from 'modules/Sidebar';
import PostListingByCategory from 'modules/PostListingByCategory';

const queryCategory = gql`
  query categoryBySlug($slug: String!) {
    categoryBySlug(slug: $slug) {
      id
      name
    }
  }
`;

const Category = () => {
  const router = useRouter();
  const isWide = useMedia('(min-width: 1024px)', true);

  const [{error, fetching, data}] = useQuery({
    query: queryCategory,
    variables: {slug: router.query.slug},
  });

  if (error || fetching) {
    const title = error ? error.message : 'Đang tải...';

    return (
      <Layout title={title}>
        <Head title={title} />
        <div className="bg-gray-200">
          <div className="container container-fluid px-2 lg:px-0 py-8">
            {error ? (
              <Alert content={title} />
            ) : (
              <div className="h-40 sm:64 flex justify-center items-center">
                <LoaderIcon />
              </div>
            )}
          </div>
        </div>
      </Layout>
    );
  }

  const title = data.categoryBySlug.name;

  return (
    <Layout title={title} breadcrumb={[{title}]} intro2>
      <Head title={title} />
      <div className="bg-gray-200">
        <div className="container container-fluid px-2 lg:px-0 py-8">
          <div className="flex">
            <div className="flex-grow">
              <PostListingByCategory id={+data.categoryBySlug.id} />
            </div>
            {isWide && (
              <div className="ml-6">
                <Sidebar />
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Category;
