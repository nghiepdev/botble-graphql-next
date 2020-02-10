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
      <span className="hidden bg-orange-100 border-orange-500 text-orange-700 bg-red-100 border-red-500 text-red-700 bg-blue-100 border-blue-500 text-blue-700 bg-green-100 border-green-500 text-green-700" />
    </div>
  );
};

Alert.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  color: PropTypes.oneOf(['orange', 'red', 'blue', 'green']),
};

Alert.defaultProps = {
  title: 'Cảnh báo',
  content: 'Một cái gì đó không lý tưởng xảy ra.',
  color: 'orange',
};

export default Alert;
