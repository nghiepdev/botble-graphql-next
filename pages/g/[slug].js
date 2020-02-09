import React from 'react';
import dynamic from 'next/dynamic';
import {useRouter} from 'next/router';
import gql from 'graphql-tag';
import {useQuery} from 'urql';
import {useMedia} from 'react-use';

import Layout from 'layouts/banner';
import Head from 'components/Head';
import Alert from 'components/Alert';
import LoaderIcon from 'components/LoaderIcon';
import Sidebar from 'modules/Sidebar';

const LightboxSlider = dynamic(() => import('components/LightboxSlider'), {
  ssr: false,
});

const queryGallery = gql`
  query galleryBySlug($slug: String!) {
    galleryBySlug(slug: $slug) {
      id
      name
      image
      images {
        medium
        full
      }
      description
    }
  }
`;

const Gallery = () => {
  const router = useRouter();
  const isWide = useMedia('(min-width: 1024px)', true);

  const [{error, fetching, data}] = useQuery({
    query: queryGallery,
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

  const title = `Bộ sưu tập hình ảnh ${data.galleryBySlug.name}`;

  return (
    <Layout title={title} breadcrumb={[{title}]}>
      <Head title={title} />
      <div className="container container-fluid px-2 lg:px-0 py-8">
        <div className="flex">
          <div className="flex-grow">
            <div
              dangerouslySetInnerHTML={{__html: data.galleryBySlug.description}}
            />
            <LightboxSlider images={data.galleryBySlug.images} />
          </div>
          {isWide && (
            <div className="ml-6">
              <Sidebar />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Gallery;
