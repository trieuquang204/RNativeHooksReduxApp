/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import 'react-native-gesture-handler';
import Navigator from './Navigator';

const App: () => React$Node = () => {
  return <Navigator />;
};

export default React.memo(App);
