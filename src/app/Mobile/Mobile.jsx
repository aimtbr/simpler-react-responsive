import { useMediaQuery } from 'react-responsive';
 

const Mobile = (props) => {
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

  const isMobile = useMediaQuery(settings);

  return isMobile ? children : null;
};

export default Mobile;