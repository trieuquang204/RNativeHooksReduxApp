/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-04-30 17:31:27
 * @LastEditTime: 2020-04-30 18:27:21
 * @LastEditors: zhangcunxia
 * @Description:路由组件
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import DrawerNavigator from './DrawerNavigator';
function Navigator() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}

export default React.memo(Navigator);
