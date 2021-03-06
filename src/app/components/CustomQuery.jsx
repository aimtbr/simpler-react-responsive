import { useMediaQuery } from 'react-responsive';


const CustomQuery = (props) => {
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

  const isWidthMatched = useMediaQuery(settings);

  return isWidthMatched ? children : null;
};

export default CustomQuery;