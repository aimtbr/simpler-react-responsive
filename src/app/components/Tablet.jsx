import React from 'react';

import CustomQuery from './CustomQuery.jsx';
import {
  SCREEN_WIDTH_TABLET,
  SCREEN_WIDTH_LAPTOP,
} from '../lib/constants.js';


const Tablet = (props) => {
  const minWidth = SCREEN_WIDTH_TABLET + 1;
  const maxWidth = SCREEN_WIDTH_LAPTOP;

  return (
    <CustomQuery
      {...props}
      minWidth={minWidth}
      maxWidth={maxWidth}
    />
  );
};

export default Tablet;