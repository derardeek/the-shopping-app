import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainNav from './MainTabNavigator';

export default createAppContainer(
  createSwitchNavigator({
    Main: MainNav,
  })
);
