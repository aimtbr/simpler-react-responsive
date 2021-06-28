import { connect } from 'react-redux';

import {
  SCREEN_LAPTOP,
  SCREEN_LAPTOP_L,
} from '../constants.js';
import CustomQuery from '../CustomQuery';


const minWidth = SCREEN_LAPTOP + 1;
const maxWidth = SCREEN_LAPTOP_L;

export const isLaptop = { minWidth, maxWidth };
export const isLaptopAndSmaller = { maxWidth };
export const isLaptopAndLarger = { minWidth };


export default 