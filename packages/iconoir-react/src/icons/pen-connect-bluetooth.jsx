import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const PenConnectBluetooth = forwardRef(
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
          <g clip-path="url(#clip0)">
            <path
              d="M6.50006 17.4999L5.5 21.5L9.23128 20.5672C9.40711 20.5232 9.56769 20.4323 9.69585 20.3041L21.5 8.5C22.3284 7.67157 22.3284 6.32843 21.5 5.5V5.5C20.6716 4.67157 19.3284 4.67157 18.5 5.5L14.5 9.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.5 6.5L20.5 9.5"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5 6.6L12 11.7L8.33333 15V3L12 6.3L5 11.4"
              stroke="currentColor"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </svg>
    );
  }
);

PenConnectBluetooth.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

PenConnectBluetooth.displayName = 'PenConnectBluetooth';

export default PenConnectBluetooth;