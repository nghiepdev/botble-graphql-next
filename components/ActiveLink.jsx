import React, {Children} from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {useRouter} from 'next/router';
import clsx from 'clsx';
import {contains} from 'ramda';

const ActiveLink = ({children, activeClassName, exact, ...props}) => {
  const {pathname, asPath} = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || '';

  const className = do {
    const className = clsx(childClassName, activeClassName);

    if (exact && props.as) {
      if (contains(props.as, asPath.replace(/[\?#].*/, ''))) {
        return className;
      }
      return childClassName;
    }

    return pathname === props.href ? className : childClassName;
  };

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  );
};

ActiveLink.propTypes = {
  activeClassName: PropTypes.string,
  exact: PropTypes.bool,
};

ActiveLink.defaultProps = {
  activeClassName: 'active text-blue-600',
};

export default ActiveLink;
