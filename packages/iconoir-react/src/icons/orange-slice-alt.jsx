import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const OrangeSliceAlt = forwardRef(
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
            d="M13.3895 10.1109L5.61133 2.33275C1.31556 6.62852 1.31556 13.5933 5.61133 17.8891C9.9071 22.1849 16.8719 22.1849 21.1677 17.8891L13.3895 10.1109ZM13.3895 10.1109L13.7431 18.2427M13.3895 10.1109H5.61133M13.3895 10.1109L8.0862 15.4142"
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

OrangeSliceAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

OrangeSliceAlt.displayName = 'OrangeSliceAlt';

export default OrangeSliceAlt;