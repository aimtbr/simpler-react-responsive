import { connect } from 'react-redux';

import {
  SCREEN_TABLET,
  SCREEN_LAPTOP,
} from '../constants.js';
import Tablet from './Tablet.jsx';


const minWidth = SCREEN_TABLET + 1;
const maxWidth = SCREEN_LAPTOP;

export const isTablet = { minWidth, maxWidth };
export const isTabletAndSmaller = { maxWidth };
export const isTabletAndLarger = { minWidth };

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    minWidth,
    maxWidth,
  };
};

export default connect(null, null, mergeProps)(Tablet);