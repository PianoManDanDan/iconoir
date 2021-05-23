import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const StyleBorder = forwardRef(
  ({ color = 'currentColor', size = 24 }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        color={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 2H8C4.68629 2 2 4.68629 2 8V16C2 19.3137 4.68629 22 8 22H16C19.3137 22 22 19.3137 22 16V8C22 4.68629 19.3137 2 16 2Z"
            stroke="currentColor"
            stroke-width="1.4992"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-dasharray="2 2"
          />
          <path
            d="M16 5H8C6.34315 5 5 6.34315 5 8V16C5 17.6569 6.34315 19 8 19H16C17.6569 19 19 17.6569 19 16V8C19 6.34315 17.6569 5 16 5Z"
            stroke="currentColor"
            stroke-width="1.4992"
            stroke-miterlimit="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    );
  }
);

StyleBorder.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

StyleBorder.displayName = 'StyleBorder';

export default StyleBorder;