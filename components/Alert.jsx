import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

const Alert = ({title, content, color, className}) => {
  return (
    <div
      className={clsx(
        'border-l-4 p-4',
        `bg-${color}-100 border-${color}-500 text-${color}-700`,
        className,
      )}
      role="alert">
      <p className="font-bold">{title}</p>
      <p>{content}</p>
    </div>
  );
};

Alert.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  color: PropTypes.string,
};

Alert.defaultProps = {
  title: 'Cảnh báo',
  content: 'Một cái gì đó không lý tưởng xảy ra.',
  color: 'orange',
};

export default Alert;
