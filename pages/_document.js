import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="vi">
        <Head>
          {/* <meta name="version" content={process.env.appVersion} /> */}
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no,viewport-fit=cover"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
          <meta
            httpEquiv="Cache-Control"
            content="no-cache, no-store, must-revalidate"
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link
            rel="preconnect"
            href="//api.iconify.design"
            crossOrigin="true"
          />
        </Head>
        <body className="text-gray-900 text-sm antialiased">
          <Main />
          <NextScript />
          <script async src="//code.iconify.design/1/1.0.4/iconify.min.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
