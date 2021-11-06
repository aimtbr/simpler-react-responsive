import React from 'react';

import CustomQuery from './CustomQuery.jsx';
import {
  SCREEN_WIDTH_MOBILE,
  SCREEN_WIDTH_TABLET,
} from '../lib/constants.js';


const Mobile = (props) => {
  const minWidth = SCREEN_WIDTH_MOBILE + 1;
  const maxWidth = SCREEN_WIDTH_TABLET;

  return (
    <CustomQuery
      {...props}
      minWidth={minWidth}
      maxWidth={maxWidth}
    />
  );
};

export default Mobile;