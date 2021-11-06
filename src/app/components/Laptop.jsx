import React from 'react';

import CustomQuery from './CustomQuery.jsx';
import {
  SCREEN_WIDTH_LAPTOP,
  SCREEN_WIDTH_LAPTOP_L,
} from '../lib/constants.js';


const Laptop = (props) => {
  const minWidth = SCREEN_WIDTH_LAPTOP + 1;
  const maxWidth = SCREEN_WIDTH_LAPTOP_L;

  return (
    <CustomQuery
      {...props}
      minWidth={minWidth}
      maxWidth={maxWidth}
    />
  );
};

export default Laptop;