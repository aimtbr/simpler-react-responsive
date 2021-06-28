import { useMediaQuery } from 'react-responsive';


const Tablet = (props) => {
  const {
    minWidth,
    maxWidth,
    children,
    andLarger = false,
    andSmaller = false,
    ...rest
  } = props;

  const settings = {
    ...rest,
    ...(andSmaller ? {} : { minWidth, }),
    ...(andLarger ? {} : { maxWidth, }),
  };

  const isTablet = useMediaQuery(settings);

  return isTablet ? children : null;
};

export default Tablet;