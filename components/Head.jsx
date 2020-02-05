import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';

const Head = ({title, children}) => {
  return (
    <NextHead>
      <title>{title}</title>
      {children}
    </NextHead>
  );
};

Head.propTypes = {
  title: PropTypes.string,
};

Head.defaultProps = {
  title: 'GraphQL Next with love Botble',
};

export default Head;
