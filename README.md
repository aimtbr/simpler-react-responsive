# [simpler-react-responsive](https://www.npmjs.com/package/simpler-react-responsive)
![npm](https://img.shields.io/npm/dm/simpler-react-responsive) ![npm bundle size](https://img.shields.io/bundlephobia/min/simpler-react-responsive) ![NPM](https://img.shields.io/npm/l/simpler-react-responsive)  
![npm](https://img.shields.io/npm/v/simpler-react-responsive)  
  
Even simpler usage of [react-responsive](https://github.com/yocontra/react-responsive) package!  
Display elements after the device width surpass a breakpoint, like with ordinary CSS media-queries but in **React** 🤯  
  
## Install
```bash
npm install simpler-react-responsive
```

## Example
```jsx
import React from 'react';
import {
  Mobile,
  Tablet,
  Laptop,
} from 'simpler-react-responsive';


export const MyComponent = (props) => {
  return (
    <div>
      <Mobile andSmaller>
        Display on Mobile and smaller (0px - 425px)
      </Mobile>

      <Mobile>
        Display on Mobile exactly (321px - 425px)
      </Mobile>

      <Mobile andLarger>
        Display on Mobile and larger (321px - infinity)
      </Mobile>

      <Tablet andSmaller>
        Display on Tablet and smaller (0px - 768px)
      </Tablet>

      <Tablet>
        Display on Tablet exactly (426px - 768px)
      </Tablet>

      <Tablet andLarger>
        Display on Tablet and larger (426px - infinity)
      </Tablet>

      <Laptop andSmaller>
        Display on Laptop and smaller (0px - 1024px)
      </Laptop>

      <Laptop>
        Display on Laptop exactly (769px - 1024px)
      </Laptop>

      <Laptop andLarger>
        Display on Laptop and larger (769px - infinity)
      </Laptop>
    </div>
  );
};
```

## Author
Maxim Marchuk  

## Contacts
Email: maxim.marchuk.d.corp@gmail.com  
Twitter: https://twitter.com/MaximMarchuk

## License
MIT
