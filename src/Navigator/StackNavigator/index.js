/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-04-30 18:13:45
 * @LastEditTime: 2020-04-30 18:27:03
 * @LastEditors: zhangcunxia
 * @Description:
 */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DrawerNavigator from '../DrawerNavigator';
import TabNavigator from '../TabNavigator';
import HomeDetailScreen from '../../Screens/TabHome/HomeDetailScreen';

const Stack = createStackNavigator();
function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name="HomeDetail" component={HomeDetailScreen} />
    </Stack.Navigator>
  );
}

export default React.memo(StackNavigator);
