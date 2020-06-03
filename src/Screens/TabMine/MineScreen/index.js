/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-04-30 17:49:49
 * @LastEditTime: 2020-04-30 18:28:01
 * @LastEditors: zhangcunxia
 * @Description:
 */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const MineScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Tab Screen</Text>
    </View>
  );
};

export default React.memo(MineScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
