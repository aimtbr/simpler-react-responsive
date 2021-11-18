import React from 'react';

import {
  Mobile,
  Tablet,
  Laptop,
} from '../../../package/';

import { TestDevice } from './TestDevice.jsx';


const App = () => {
  const devices = [
    {
      alias: 'Mobile',
      component: Mobile,
    },
    {
      alias: 'Tablet',
      component: Tablet,
    },
    {
      alias: 'Laptop',
      component: Laptop,
    },
  ];

  const Devices = () => {
    const devicesRendered = devices.map((device) => {
      const { alias, component } = device;

      // TODO: create stylesheets to get rid of the <br /> tag

      return (
        <React.Fragment key={alias}>
          <TestDevice
            alias={alias}
            component={component}
          />
          <br />
        </React.Fragment>
      );
    });

    return (
      <div className="devices">
        {devicesRendered}
      </div>
    );
  };

  return (
    <div className="app">
      <Devices />
    </div>
  );
};

export default App;