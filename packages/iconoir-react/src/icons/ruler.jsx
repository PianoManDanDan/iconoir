import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Ruler = forwardRef(
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
            d="M16 7V2.6C16 2.26863 15.7314 2 15.4 2H8.6C8.26863 2 8 2.26863 8 2.6V21.4C8 21.7314 8.26863 22 8.6 22H15.4C15.7314 22 16 21.7314 16 21.4V17M16 7H13M16 7V12M16 12H13M16 12V17M16 17H13"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    );
  }
);

Ruler.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Ruler.displayName = 'Ruler';

export default Ruler;