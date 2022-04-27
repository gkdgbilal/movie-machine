import Head from 'next/head';
import React from 'react';

function Meta({ keywords, description, title }) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}

Meta.defaultProps = {
  keywords: 'movie app, free movies, popular movies',
  description: 'watch movie for free',
  title: 'Movie Machine'
};

export default Meta;
