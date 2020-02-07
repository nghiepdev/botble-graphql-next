import React from 'react';

import Layout from 'layouts/default';
import Head from 'components/Head';

const Home = () => {
  return (
    <Layout>
      <Head />
      <div className="bg-gray-200">
        <span className="iconify" data-icon="noto:bird"></span>
      </div>
    </Layout>
  );
};

export default Home;