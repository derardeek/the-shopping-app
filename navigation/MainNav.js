import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Home from '../screens/Home';
import List from '../screens/List';
import Details from '../screens/Details';

const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: Home,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home'
};

HomeStack.path = '';

const ListStack = createStackNavigator(
  {
    List: List,
  },
  config
);

ListStack.navigationOptions = {
  tabBarLabel: 'List',
};

ListStack.path = '';

const DetailStack = createStackNavigator(
  {
    Details: Details,
  },
  config
);

DetailStack.navigationOptions = {
  tabBarLabel: 'Add Item',
};

DetailStack.path = '';

const tabNavigator = createBottomTabNavigator({
  HomeStack,
  ListStack,
  DetailStack,
});

tabNavigator.path = '';

export default tabNavigator;
