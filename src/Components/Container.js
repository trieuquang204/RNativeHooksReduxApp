/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-04-30 18:34:37
 * @LastEditTime: 2020-04-30 18:35:24
 * @LastEditors: zhangcunxia
 * @Description:页面容器组件
 */

import React from 'react';
import {View} from 'react-native';

const Container = ({children}) => {
  return <View>{children}</View>;
};

export default React.memo(Container);
