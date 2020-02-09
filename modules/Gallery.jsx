import React, {useEffect, useRef} from 'react';
import Head from 'next/head';
import Link from 'next/link';
import gql from 'graphql-tag';
import {useQuery} from 'urql';
import {tns} from 'tiny-slider/src/tiny-slider';

import Alert from 'components/Alert';
import LoaderIcon from 'components/LoaderIcon';

const queryGallery = gql`
  {
    galleryListing {
      id
      name
      slug
      image
    }
  }
`;

const Gallery = () => {
  const sliderRef = useRef();

  const [{error, fetching, data}] = useQuery({
    query: queryGallery,
  });

  useEffect(() => {
    let slider;

    if (!fetching && sliderRef.current) {
      slider = tns({
        container: sliderRef.current,
        fixedWidth: 375,
        gutter: 10,
        mouseDrag: true,
        slideBy: 'page',
        loop: false,
        lazyload: true,
        nav: false,
        controls: false,
      });
    }

    return () => slider?.destroy();
  }, [fetching]);

  if (error) {
    return <Alert content={error.message} />;
  }

  if (fetching) {
    return (
      <div className="h-40 sm:56 md:64 flex justify-center items-center flex-grow">
        <LoaderIcon />
      </div>
    );
  }

  return (
    <div ref={sliderRef}>
      <Head>
        <link
          rel="stylesheet"
          href="//unpkg.com/tiny-slider@2.9.2/dist/tiny-slider.css"
        />
      </Head>
      {data.galleryListing.map(({id, name, slug, image}) => (
        <Link key={id} href="/g/[slug]" as={`/g/${slug}`}>
          <a className="relative text-white">
            <img
              data-src={image}
              alt=""
              height="250"
              className="tns-lazy-img object-cover object-center"
            />
            <h4 className="absolute w-full bottom-0 z-10 p-3">{name}</h4>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default Gallery;
