/*
 * @Author: zhangcunxia
 * @Email: zcx4150@gmail.com
 * @Date: 2020-04-30 18:08:56
 * @LastEditTime: 2020-04-30 18:27:33
 * @LastEditors: zhangcunxia
 * @Description:
 */
import React from 'react';
import {View, Button, StyleSheet} from 'react-native';

const NotificationsScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
};

export default React.memo(NotificationsScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
