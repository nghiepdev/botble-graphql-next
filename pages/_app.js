import React from 'react';
import {dedupExchange, cacheExchange, fetchExchange} from 'urql';
import {withUrqlClient} from 'next-urql';

import 'resources/stylesheets/styles.css';

function MyApp({Component, pageProps}) {
  return <Component {...pageProps} />;
}

export default withUrqlClient(
  {
    url: process.browser ? process.env.APP_API : process.env.APP_API_SERVER,
  },
  ssrEx =>
    [
      dedupExchange,
      cacheExchange,
      ssrEx,
      process.env.NODE_ENV !== 'production'
        ? require('@urql/devtools').devtoolsExchange
        : undefined,
      fetchExchange,
    ].filter(Boolean),
)(MyApp);
