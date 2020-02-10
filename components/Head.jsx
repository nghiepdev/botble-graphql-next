import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';

const Head = ({children, title, description, thumb}) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta key="description" name="description" content={description} />
      <meta key="og:image" property="og:image" content={thumb} />
      {children}
    </NextHead>
  );
};

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  thumb: PropTypes.string,
};

Head.defaultProps = {
  title: 'GraphQL Next with love Botble',
  description:
    "Built with GraphQL + Next.js based on Botble CMS. We're creating the best platform to kick start your project",
  thumb: 'https://drive.google.com/uc?id=1s5CJR6QOplacHnGlmFq3ks7Mc4-4c6Yr',
};

export default Head;
