/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-04-30 17:53:22
 * @LastEditTime: 2020-04-30 18:03:26
 * @LastEditors: zhangcunxia
 * @Description:
 */
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const HomeDetailScreen = (props) => {
  const {route} = props;
  const {params} = route;
  const {a} = params || {};
  return (
    <View>
      <TouchableOpacity>
        <Text>HomeDetailScreena</Text>
      </TouchableOpacity>
      <Text>HomeDetailScreen aaa:{a}</Text>
    </View>
  );
};

export default React.memo(HomeDetailScreen);
