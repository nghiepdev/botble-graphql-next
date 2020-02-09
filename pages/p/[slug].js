import React from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import gql from 'graphql-tag';
import {useQuery} from 'urql';
import {useMedia} from 'react-use';
import {format} from 'date-fns';
import {InlineIcon} from '@iconify/react';
import cubeSharpIcon from '@iconify/icons-ion/cube-sharp';
import clockIcon from '@iconify/icons-cil/clock';

import Layout from 'layouts/banner';
import Head from 'components/Head';
import Alert from 'components/Alert';
import LoaderIcon from 'components/LoaderIcon';
import RecentListing from 'modules/RecentListing';

const queryPost = gql`
  query postBySlug($slug: String!) {
    postBySlug(slug: $slug) {
      id
      name
      image
      content
      createdAt
      categories {
        name
        slug
      }
    }
  }
`;

const Post = () => {
  const router = useRouter();
  const isWide = useMedia('(min-width: 1024px)', true);

  const [{error, fetching, data}] = useQuery({
    query: queryPost,
    variables: {slug: router.query.slug},
  });

  if (error || fetching) {
    const title = error ? error.message : 'Đang tải...';

    return (
      <Layout title={title}>
        <Head title={title} />
        <div className="container container-fluid px-2 lg:px-0 py-8">
          {error ? (
            <Alert content={title} />
          ) : (
            <div className="h-40 sm:64 flex justify-center items-center">
              <LoaderIcon />
            </div>
          )}
        </div>
      </Layout>
    );
  }

  const title = data.postBySlug.name;
  const category = data.postBySlug.categories[0];

  return (
    <Layout
      title={title}
      breadcrumb={[
        category
          ? {
              title: category.name,
              href: '/c/[slug]',
              as: `/c/${category.slug}`,
            }
          : undefined,
        {title},
      ].filter(Boolean)}>
      <Head title={title} />
      <div className="container container-fluid px-2 lg:px-0 py-8">
        <div className="flex">
          <div className="flex-grow pb-10">
            <h1 className="text-2xl text-gray-800 font-semibold">{title}</h1>
            <div className="my-4">
              {category && (
                <>
                  <InlineIcon icon={cubeSharpIcon} className="text-fresh-red" />{' '}
                  <Link href="/c/[slug]" as={`/c/${category.slug}`}>
                    <a className="inline-block mr-2">
                      <span className="uppercase text-xs font-medium">
                        {category.name}
                      </span>
                    </a>
                  </Link>
                </>
              )}
              <span>
                <InlineIcon icon={clockIcon} className="text-fresh-red" />{' '}
                <small className="uppercase text-xs font-medium">
                  {format('PP', new Date(data.postBySlug.createdAt))}
                </small>
              </span>
            </div>
            <div
              dangerouslySetInnerHTML={{__html: data.postBySlug.content}}
              className="border-t pt-6"
            />
          </div>
          {isWide && (
            <div className="ml-6">
              <RecentListing />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Post;
