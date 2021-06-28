import { useMediaQuery } from 'react-responsive';


const Laptop = (props) => {
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

  const isLaptop = useMediaQuery(settings);

  return isLaptop ? children : null;
};

export default Laptop;