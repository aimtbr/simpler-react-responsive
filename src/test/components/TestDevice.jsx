import React from 'react';

import {
  SMALLER_DEVICE_SIZE_ALIAS,
  EXACT_DEVICE_SIZE_ALIAS,
  LARGER_DEVICE_SIZE_ALIAS,
} from '../constants.js';


export const TestDevice = (props) => {
  const {
    alias,
    component: Component,
  } = props;

  const className = `${alias}-device`.toLowerCase();

  const composeDeviceAlias = (sizeAlias) => `${alias} ${sizeAlias}`;

  // TODO: create stylesheets to get rid of the <br /> tag
  
  return (
    <div className={className}>
      <Component andSmaller>
        {composeDeviceAlias(SMALLER_DEVICE_SIZE_ALIAS)}
        <br />
      </Component>

      <Component>
        {composeDeviceAlias(EXACT_DEVICE_SIZE_ALIAS)}
        <br />
      </Component>

      <Component andLarger>
        {composeDeviceAlias(LARGER_DEVICE_SIZE_ALIAS)}
        <br />
      </Component>
    </div>
  );
};