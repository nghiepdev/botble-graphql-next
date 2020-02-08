import React from 'react';

import Layout from 'layouts/default';
import Head from 'components/Head';
import FeaturedListing from 'modules/FeaturedListing';

const Home = () => {
  return (
    <Layout>
      <Head />
      <div className="bg-gray-200 py-3 sm:py-6 md:py-10">
        <div className="container container-fluid px-2 lg:px-0">
          <FeaturedListing />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
