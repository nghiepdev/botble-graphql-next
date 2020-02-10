import React from 'react';
import Document, {Html, Head, Main, NextScript} from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="vi">
        <Head>
          <meta name="version" content={process.env.APP_VERSION} />
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

          {process.env.APP_GOOGLE_TAG_KEY && (
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${process.env.APP_GOOGLE_TAG_KEY}');`,
              }}
            />
          )}
        </Head>
        <body className="text-gray-900 text-sm antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
