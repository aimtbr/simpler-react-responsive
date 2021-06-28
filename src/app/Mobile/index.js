import { connect } from 'react-redux';

import {
  SCREEN_MOBILE,
  SCREEN_TABLET,
} from '../constants.js';
import Mobile from './Mobile.jsx';


const minWidth = SCREEN_MOBILE + 1;
const maxWidth = SCREEN_TABLET;

export const isMobile = { minWidth, maxWidth };
export const isMobileAndSmaller = { maxWidth };
export const isMobileAndLarger = { minWidth };

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    ...stateProps,
    ...dispatchProps,
    minWidth,
    maxWidth,
  };
};

export default connect(null, null, mergeProps)(Mobile);